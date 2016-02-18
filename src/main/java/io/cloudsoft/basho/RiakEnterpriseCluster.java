package io.cloudsoft.basho;

import java.util.Set;

import com.google.common.reflect.TypeToken;

import brooklyn.entity.annotation.Effector;
import brooklyn.entity.annotation.EffectorParam;
import brooklyn.entity.nosql.riak.RiakCluster;
import brooklyn.entity.nosql.riak.RiakNode;
import brooklyn.entity.proxying.ImplementedBy;
import brooklyn.event.AttributeSensor;
import brooklyn.event.basic.AttributeSensorAndConfigKey;
import brooklyn.event.basic.BasicAttributeSensorAndConfigKey;
import brooklyn.event.basic.Sensors;
import brooklyn.util.flags.SetFromFlag;

@ImplementedBy(RiakEnterpriseClusterImpl.class)
public interface RiakEnterpriseCluster extends RiakCluster {

    BasicAttributeSensorAndConfigKey.StringAttributeSensorAndConfigKey CLUSTER_NAME =
            new BasicAttributeSensorAndConfigKey.StringAttributeSensorAndConfigKey("riak.cluster.clusterName",
                    "Unique name of the cluster, used in multi-datacenter replication");

    AttributeSensor<Boolean> REPLICATION_INITIALIZED = Sensors.newBooleanSensor("riak.replication.initialized",
            "Indicates that the cluster has been initialized and is ready to participate in MDC replication");

    @SuppressWarnings("serial")
    AttributeSensor<Set<RiakEnterpriseCluster>> REPLICATION_SINKS = Sensors.newSensor(new TypeToken<Set<RiakEnterpriseCluster>>(){},
        "riak.cluster.replication.sinks", "Set of RiakEnterpriseClusters currently acting as replication sinks to this cluster");

    void updateReplication(Set<RiakEnterpriseCluster> upClusters);

    @Effector(description="Manually initiates a fullsync operation with connected sites.")
    void triggerFullSync(@EffectorParam(name = "clusterSink", description = "cluster to make sync with") String clusterName);
    
    @SetFromFlag("downloadUrlRhelCentos")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_RHEL_CENTOS = RiakNode.DOWNLOAD_URL_RHEL_CENTOS;

    @SetFromFlag("downloadUrlUbuntu")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_UBUNTU = RiakNode.DOWNLOAD_URL_UBUNTU;

    @SetFromFlag("downloadUrlDebian")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_DEBIAN = RiakNode.DOWNLOAD_URL_DEBIAN;

    @SetFromFlag("downloadUrlMac")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_MAC = RiakNode.DOWNLOAD_URL_MAC;

}
