package io.cloudsoft.basho;

import brooklyn.entity.nosql.riak.RiakNodeDriver;

public interface RiakEnterpriseNodeDriver extends RiakNodeDriver {
    void initializeCluster(String name);

    void addReplicationSink(RiakEnterpriseCluster upCluster);
}
