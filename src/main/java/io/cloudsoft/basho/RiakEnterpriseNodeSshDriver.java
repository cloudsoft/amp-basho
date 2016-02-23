package io.cloudsoft.basho;

import static java.lang.String.format;
import static org.apache.brooklyn.util.ssh.BashCommands.sbinPath;
import static org.apache.brooklyn.util.ssh.BashCommands.sudo;

import java.util.List;
import java.util.Map;

import org.apache.brooklyn.api.entity.Entity;
import org.apache.brooklyn.core.effector.ssh.SshEffectorTasks;
import org.apache.brooklyn.core.entity.Attributes;
import org.apache.brooklyn.core.entity.EntityPredicates;
import org.apache.brooklyn.core.location.access.BrooklynAccessUtils;
import org.apache.brooklyn.entity.nosql.riak.RiakNode;
import org.apache.brooklyn.entity.nosql.riak.RiakNodeImpl;
import org.apache.brooklyn.entity.nosql.riak.RiakNodeSshDriver;
import org.apache.brooklyn.entity.software.base.lifecycle.ScriptHelper;
import org.apache.brooklyn.location.ssh.SshMachineLocation;
import org.apache.brooklyn.util.collections.MutableList;
import org.apache.brooklyn.util.core.task.DynamicTasks;
import org.apache.brooklyn.util.core.task.Tasks;
import org.apache.brooklyn.util.net.Urls;
import org.apache.brooklyn.util.ssh.BashCommands;
import org.apache.brooklyn.util.time.Duration;
import org.apache.brooklyn.util.time.Time;

import com.google.api.client.repackaged.com.google.common.base.Preconditions;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Iterables;

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

    // TODO make protected in super
    private String getRiakName() {
        return entity.getAttribute(RiakNode.RIAK_NODE_NAME);
    }
    private Boolean hasJoinedCluster() {
        return Boolean.TRUE.equals(entity.getAttribute(RiakNode.RIAK_NODE_HAS_JOINED_CLUSTER));
    }
    private void addRiakOnPath(ScriptHelper scriptHelper) {
        Map<String, String> newPathVariable = ImmutableMap.of("PATH", sbinPath());
//        log.warn("riak command not found on PATH. Altering future commands' environment variables from {} to {}", getShellEnvironment(), newPathVariable);
        scriptHelper.environmentVariablesReset(newPathVariable);
    }

    // TODO add to super
    protected String riakAdmin(String adminCommand, String ...args) {
        return sudo(format("%s "+adminCommand, MutableList.<String>builder().add(getRiakAdminCmd()).addAll(args).build().toArray()));
    }
    
    // TODO change in super
    @Override
    public void joinCluster(String nodeName) {
        if (getRiakName().equals(nodeName)) {
            log.warn("Cannot join Riak node: {} to itself", nodeName);
        } else {
            if (!hasJoinedCluster()) {
                
                /*
                 * When trying to join, depending what is happening elsewhere either the join might fail,
                 * the plan might fail, or the commit might fail.
                 * In the first case we get a 1 exit code but in the latter 2 cases we get a 0 exit code.
                 * The error messages are helpful however though it feels a bit wrong.
                 * 
                 * If the join fails of course you need to retry the join.
                 * However if the plan or commit fails a subsequent join will fail.
                 * It is safe to replan if planning fails so maybe we could make each command
                 * retry until successful however I'm not sure how resilient an uncommitted join is.
                 * 
                 * In the case of a failed plan or commit it seemed sensible to do a cluster clear
                 * so we could re-join but cluster clear on uncommitted join seems to shutdown the node. 
                 */
                do {
                    ScriptHelper joinClusterScript = newScript("joinCluster")
                        .body.append(BashCommands.alternatives(
                            riakAdmin("cluster join %s", nodeName),
                            // it's okay if join fails if we are already in a joining state
                            riakAdmin("riak-admin cluster status | grep %s | grep joining", getRiakName())))
                        .body.append(riakAdmin("cluster plan"))
                        .body.append(riakAdmin("cluster commit"))
                        .gatherOutput()
                        .failOnNonZeroResultCode(false);

                    if (!isRiakOnPath()) {
                        addRiakOnPath(joinClusterScript);
                    }

                    int result = joinClusterScript.execute();
                    String output = joinClusterScript.getResultStdout()+"\n"+joinClusterScript.getResultStderr();
                    
                    // if plan or commit fails it prints this output but gives 0 exit code ... work around as follows
                    boolean uncommittedPlan = output.contains("Cannot commit until cluster state has converged.");
                    uncommittedPlan |= output.contains("Cannot plan until cluster state has converged.");
                    
                    if (result==0 && !uncommittedPlan) {
                        // success!
                        break;
                    }
                    
                    boolean joinFailedSuggestingTryAgain = output.toLowerCase().contains("try again"); 
                    if (uncommittedPlan || joinFailedSuggestingTryAgain) {
                        DynamicTasks.queue(Tasks.warning("Join cluster temporarily unsuccessful - retry needed", null));
//                        // would make sense to issue a clear so subsequent join works,
//                        // but it shuts down on clear :( so we are better off not clearing
//                        // and then allowing the join to fail if it's already in a joining state
//                        if (uncommittedPlan) {
//                            newScript("clearJoin").body.append(riakAdmin("cluster clear")).execute();
//                        }
                        Tasks.setBlockingDetails("Join cluster temporarily unsuccessful - retrying after delay");
                        Time.sleep(Duration.THIRTY_SECONDS);
                        Tasks.resetBlockingDetails();
                        continue;
                    }
                    DynamicTasks.queue(Tasks.fail("Failed to join cluster:\n"+output, null));
                } while (true);
                
                entity.sensors().set(RiakNode.RIAK_NODE_HAS_JOINED_CLUSTER, Boolean.TRUE);
            } else {
                DynamicTasks.queue(Tasks.warning("Entity "+this+" is already in the riak cluster", null));
            }
        }
    }
}
