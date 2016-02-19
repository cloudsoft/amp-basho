package io.cloudsoft.basho;

import java.util.Set;

import com.google.common.reflect.TypeToken;

import org.apache.brooklyn.core.annotation.Effector;
import org.apache.brooklyn.core.annotation.EffectorParam;
import org.apache.brooklyn.entity.nosql.riak.RiakCluster;
import org.apache.brooklyn.entity.nosql.riak.RiakNode;
import org.apache.brooklyn.api.entity.ImplementedBy;
import org.apache.brooklyn.api.sensor.AttributeSensor;
import org.apache.brooklyn.core.sensor.AttributeSensorAndConfigKey;
import org.apache.brooklyn.core.sensor.BasicAttributeSensorAndConfigKey;
import org.apache.brooklyn.core.sensor.Sensors;
import org.apache.brooklyn.util.core.flags.SetFromFlag;

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
