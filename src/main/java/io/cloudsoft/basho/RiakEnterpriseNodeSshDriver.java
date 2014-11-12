package io.cloudsoft.basho;

import brooklyn.entity.basic.lifecycle.ScriptHelper;
import brooklyn.entity.nosql.couchbase.CouchbaseNode;
import brooklyn.entity.nosql.riak.RiakCluster;
import brooklyn.entity.nosql.riak.RiakNode;
import brooklyn.entity.nosql.riak.RiakNodeImpl;
import brooklyn.entity.nosql.riak.RiakNodeSshDriver;
import brooklyn.entity.software.SshEffectorTasks;
import brooklyn.location.access.BrooklynAccessUtils;
import brooklyn.location.basic.SshMachineLocation;
import brooklyn.util.net.Urls;
import brooklyn.util.task.DynamicTasks;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.Lists;

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
        List<String> commands = Lists.newLinkedList();
        String advancedConfigTemplate = processTemplate(entity.getConfig(RiakEnterpriseNode.RIAK_ADVANCED_CONFIG_TEMPLATE_URL));
        String saveAsAdvancedConfig = Urls.mergePaths(getRunDir(), "advanced.config");
        DynamicTasks.queueIfPossible(SshEffectorTasks.put(saveAsAdvancedConfig).contents(advancedConfigTemplate));
        commands.add(sudo("mv " + saveAsAdvancedConfig + " " + getRiakEtcDir()));
        ScriptHelper customizeScript = newScript(CUSTOMIZING)
                .failOnNonZeroResultCode()
                .body.append(commands);
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
        RiakEnterpriseNode targetNode = (RiakEnterpriseNode)upCluster.getAttribute(RiakCluster.RIAK_CLUSTER_NODES).keySet().iterator().next();
        // FIXME: Use sensor for port
        String targetHostAndPort = BrooklynAccessUtils.getBrooklynAccessibleAddress(targetNode, 9080).toString();
        List<String> commands = ImmutableList.<String>builder()
                .add(sudo(format("%s connect %s", getRiakReplCommand(), targetHostAndPort)))
                .add(sudo(format("%s realtime enable %s", getRiakReplCommand(), targetClusterName)))
                .add(sudo(format("%s realtime start %s", getRiakReplCommand(), targetClusterName)))
                .build();
        ScriptHelper addSink = newScript("addSink")
                .body.append(commands)
                .failIfBodyEmpty();
        addSink.execute();
    }

    private String getRiakReplCommand() {
        return isPackageInstall() ? "riak-repl" : Urls.mergePaths(getExpandedInstallDir(), "bin/riak-repl");
    }
}
