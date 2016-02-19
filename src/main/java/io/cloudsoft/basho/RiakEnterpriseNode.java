package io.cloudsoft.basho;

import org.apache.brooklyn.config.ConfigKey;
import org.apache.brooklyn.core.config.ConfigKeys;
import org.apache.brooklyn.entity.nosql.riak.RiakNode;
import org.apache.brooklyn.api.entity.ImplementedBy;
import org.apache.brooklyn.core.sensor.PortAttributeSensorAndConfigKey;

@ImplementedBy(RiakEnterpriseNodeImpl.class)
public interface RiakEnterpriseNode extends RiakNode {
    ConfigKey<String> RIAK_ADVANCED_CONFIG_TEMPLATE_URL = ConfigKeys.newStringConfigKey(
            "riak.advancedConfig.templateUrl", "URL of Template file (in freemarker format) for the advanced.config file",
            "classpath://advanced.config");

    PortAttributeSensorAndConfigKey CLUSTER_MANAGER_PORT = new PortAttributeSensorAndConfigKey("riak.replication.cluster.manager.port",
            "Cluster Manager Port", "9080+");

    void initializeReplication(String name);

    void triggerFullSync(String clusterName);

    void addReplicationSink(RiakEnterpriseCluster upCluster);

    Integer getRiakClusterManagerPort();
}
