package io.cloudsoft.basho;

import org.apache.brooklyn.entity.nosql.riak.RiakNodeDriver;

public interface RiakEnterpriseNodeDriver extends RiakNodeDriver {
    void initializeCluster(String name);

    void addReplicationSink(RiakEnterpriseCluster upCluster);

    void triggerFullSync(String clusterName);
}
