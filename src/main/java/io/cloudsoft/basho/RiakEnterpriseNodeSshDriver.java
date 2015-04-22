package io.cloudsoft.basho;

import brooklyn.entity.Entity;
import brooklyn.entity.basic.Attributes;
import brooklyn.entity.basic.EntityPredicates;
import brooklyn.entity.basic.lifecycle.ScriptHelper;
import brooklyn.entity.nosql.riak.RiakNodeImpl;
import brooklyn.entity.nosql.riak.RiakNodeSshDriver;
import brooklyn.entity.software.SshEffectorTasks;
import brooklyn.location.access.BrooklynAccessUtils;
import brooklyn.location.basic.SshMachineLocation;
import brooklyn.util.net.Urls;
import brooklyn.util.task.DynamicTasks;
import com.google.api.client.repackaged.com.google.common.base.Preconditions;
import com.google.common.base.Strings;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.Iterables;

import java.util.List;

import static brooklyn.util.ssh.BashCommands.sudo;
import static java.lang.String.format;

public class RiakEnterpriseNodeSshDriver extends RiakNodeSshDriver implements RiakEnterpriseNodeDriver {

    public RiakEnterpriseNodeSshDriver(RiakNodeImpl entity, SshMachineLocation machine) {
        super(entity, machine);
    }

    @Override
    public void customize() {
        super.customize();

        // TODO remove the old advanced.config
        // http://docs.basho.com/riak/latest/ops/advanced/configs/configuration-files/#The-advanced-config-file
        String advancedConfigTemplate = processTemplate(entity.getConfig(RiakEnterpriseNode.RIAK_ADVANCED_CONFIG_TEMPLATE_URL));
        String saveAsAdvancedConfig = Urls.mergePaths(getRunDir(), "advanced.config");
        DynamicTasks.queueIfPossible(SshEffectorTasks.put(saveAsAdvancedConfig).contents(advancedConfigTemplate));

        ImmutableList.Builder<String> commands = ImmutableList.<String>builder()
                .add(sudo("mv " + saveAsAdvancedConfig + " " + getRiakEtcDir()));

        ScriptHelper customizeScript = newScript(CUSTOMIZING)
                .failOnNonZeroResultCode()
                .body.append(commands.build());
        customizeScript.execute();
    }

    @Override
    public void initializeCluster(String name) {
        ScriptHelper renameScript = newScript("set cluster name")
                .body.append(sudo(format("%s clustername %s", getRiakReplCommand(), name)))
                .failOnNonZeroResultCode();
        renameScript.execute();
    }

    @Override
    public void addReplicationSink(RiakEnterpriseCluster upCluster) {
        String targetClusterName = upCluster.getAttribute(RiakEnterpriseCluster.CLUSTER_NAME);
        Preconditions.checkNotNull(targetClusterName, "Cannot add unnamed cluster as a sink: " + upCluster);
        Iterable<Entity> upEntities = Iterables.filter(upCluster.getMembers(), EntityPredicates.attributeEqualTo(Attributes.SERVICE_UP, Boolean.TRUE));
        RiakEnterpriseNode targetNode;
        if (upEntities.iterator().hasNext()) {
            targetNode = (RiakEnterpriseNode) upEntities.iterator().next();
        } else {
            throw new IllegalStateException(String.format("Cannot add %s as a sink as it has no running nodes", upCluster));
        }
        String targetHostAndPort = BrooklynAccessUtils.getBrooklynAccessibleAddress(targetNode, targetNode.getRiakClusterManagerPort()).toString();
        List<String> commands = ImmutableList.<String>builder()
                .add(sudo(format("%s connect %s", getRiakReplCommand(), targetHostAndPort)))
                .add(sudo(format("%s realtime enable %s", getRiakReplCommand(), targetClusterName)))
                .add(sudo(format("%s realtime start %s", getRiakReplCommand(), targetClusterName)))
                .build();
        ScriptHelper addSink = newScript("addSink")
                .body.append(commands)
                .gatherOutput()
                .failOnNonZeroResultCode();
        addSink.execute();
    }

    @Override
    public void triggerFullSync(String clusterName) {
        List<String> commands = ImmutableList.<String>builder()
                .add(sudo(format("%s fullsync enable %s", getRiakReplCommand(), clusterName)))
                .add(sudo(format("%s fullsync start %s", getRiakReplCommand(), clusterName)))
                .build();
        newScript("triggerFullSync")
                .body.append(commands)
                .gatherOutput()
                .execute();
    }

    private String getRiakReplCommand() {
        return "riak-repl";
    }
}
