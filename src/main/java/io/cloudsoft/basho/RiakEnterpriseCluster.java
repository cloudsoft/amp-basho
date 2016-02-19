package io.cloudsoft.basho;

import io.cloudsoft.basho.RiakEnterpriseNode.RiakOsType;

import java.util.Set;

import org.apache.brooklyn.api.entity.EntitySpec;
import org.apache.brooklyn.api.entity.ImplementedBy;
import org.apache.brooklyn.api.sensor.AttributeSensor;
import org.apache.brooklyn.config.ConfigKey;
import org.apache.brooklyn.core.annotation.Effector;
import org.apache.brooklyn.core.annotation.EffectorParam;
import org.apache.brooklyn.core.config.ConfigKeys;
import org.apache.brooklyn.core.sensor.AttributeSensorAndConfigKey;
import org.apache.brooklyn.core.sensor.BasicAttributeSensorAndConfigKey;
import org.apache.brooklyn.core.sensor.Sensors;
import org.apache.brooklyn.entity.nosql.riak.RiakCluster;
import org.apache.brooklyn.util.core.flags.SetFromFlag;

import com.google.common.reflect.TypeToken;

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

    ConfigKey<EntitySpec<?>> MEMBER_SPEC = ConfigKeys.newConfigKeyWithDefault(RiakCluster.MEMBER_SPEC, EntitySpec.create(RiakEnterpriseNode.class));
    
    void updateReplication(Set<RiakEnterpriseCluster> upClusters);

    @Effector(description="Manually initiates a fullsync operation with connected sites.")
    void triggerFullSync(@EffectorParam(name = "clusterSink", description = "cluster to make sync with") String clusterName);
    
    @SetFromFlag("os")
    ConfigKey<RiakOsType> OS_TYPE = RiakEnterpriseNode.OS_TYPE;
    
    @SetFromFlag("downloadUrlRhelCentos")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_RHEL_CENTOS = RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS;

    @SetFromFlag("downloadUrlUbuntu")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_UBUNTU = RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU;
    
    @SetFromFlag("downloadUrlDebian")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_DEBIAN = RiakEnterpriseNode.DOWNLOAD_URL_DEBIAN; 

    @SetFromFlag("downloadUrlMac")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_MAC = RiakEnterpriseNode.DOWNLOAD_URL_MAC; 

    @SetFromFlag("downloadUrl")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL = RiakEnterpriseNode.DOWNLOAD_URL; 

}
