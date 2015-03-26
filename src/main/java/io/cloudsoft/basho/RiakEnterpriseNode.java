package io.cloudsoft.basho;

import brooklyn.config.ConfigKey;
import brooklyn.entity.basic.ConfigKeys;
import brooklyn.entity.nosql.riak.RiakNode;
import brooklyn.entity.proxying.ImplementedBy;
import brooklyn.event.basic.PortAttributeSensorAndConfigKey;

@ImplementedBy(RiakEnterpriseNodeImpl.class)
public interface RiakEnterpriseNode extends RiakNode {
    ConfigKey<String> RIAK_ADVANCED_CONFIG_TEMPLATE_URL = ConfigKeys.newStringConfigKey(
            "riak.advancedConfig.templateUrl", "Template file (in freemarker format) for the advanced.config file",
            "classpath://advanced.config");

    PortAttributeSensorAndConfigKey CLUSTER_MANAGER_PORT = new PortAttributeSensorAndConfigKey("riak.replication.cluster.manager.port",
            "Cluster Manager Port", "9080+");

    void initializeReplication(String name);

    void triggerFullSync(String clusterName);

    void addReplicationSink(RiakEnterpriseCluster upCluster);

    Integer getRiakClusterManagerPort();
}
