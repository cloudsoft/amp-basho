package io.cloudsoft.basho;

import brooklyn.config.ConfigKey;
import brooklyn.entity.basic.ConfigKeys;
import brooklyn.entity.group.DynamicFabric;
import brooklyn.entity.proxying.ImplementedBy;
import brooklyn.location.Location;
import com.google.common.base.Function;
import com.google.common.reflect.TypeToken;

@ImplementedBy(RiakEnterpriseFabricImpl.class)
public interface RiakEnterpriseFabric extends DynamicFabric {
    ConfigKey<? extends Function<Location,String>> CLUSTER_NAMER = ConfigKeys.newConfigKey(new TypeToken<Function<Location, String>>() {},
        "riak.fabric.cluster.namer", "Function used to provide the riak.replication.clusterName for a given location");
}
