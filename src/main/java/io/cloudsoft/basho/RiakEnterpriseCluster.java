package io.cloudsoft.basho;

import brooklyn.entity.annotation.Effector;
import brooklyn.entity.annotation.EffectorParam;
import brooklyn.entity.nosql.riak.RiakCluster;
import brooklyn.entity.proxying.ImplementedBy;
import brooklyn.event.AttributeSensor;
import brooklyn.event.basic.BasicAttributeSensorAndConfigKey;
import brooklyn.event.basic.Sensors;
import com.google.common.reflect.TypeToken;

import java.util.Set;

@ImplementedBy(RiakEnterpriseClusterImpl.class)
public interface RiakEnterpriseCluster extends RiakCluster {

    BasicAttributeSensorAndConfigKey.StringAttributeSensorAndConfigKey CLUSTER_NAME =
            new BasicAttributeSensorAndConfigKey.StringAttributeSensorAndConfigKey("riak.cluster.clusterName",
                    "Unique name of the cluster, used in multi-datacenter replication");

    AttributeSensor<Boolean> REPLICATION_INITIALIZED = Sensors.newBooleanSensor("riak.replication.initialized",
            "Indicates that the cluster has been initialized and is ready to participate in MDC replication");

    AttributeSensor<Set<RiakEnterpriseCluster>> REPLICATION_SINKS = Sensors.newSensor(new TypeToken<Set<RiakEnterpriseCluster>>(){},
        "riak.cluster.replication.sinks", "Set of RiakEnterpriseClusters currently acting as replication sinks to this cluster");

    void updateReplication(Set<RiakEnterpriseCluster> upClusters);

    @Effector(description="Manually initiates a fullsync operation with connected sites.")
    void triggerFullSync(@EffectorParam(name = "clusterSink", description = "cluster to make sync with") String clusterName);
}
