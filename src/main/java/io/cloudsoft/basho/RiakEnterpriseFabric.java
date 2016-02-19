package io.cloudsoft.basho;

import org.apache.brooklyn.config.ConfigKey;
import org.apache.brooklyn.core.config.ConfigKeys;
import org.apache.brooklyn.entity.group.DynamicFabric;
import org.apache.brooklyn.api.entity.ImplementedBy;
import org.apache.brooklyn.api.location.Location;
import com.google.common.base.Function;
import com.google.common.reflect.TypeToken;

@ImplementedBy(RiakEnterpriseFabricImpl.class)
public interface RiakEnterpriseFabric extends DynamicFabric {
    ConfigKey<? extends Function<Location,String>> CLUSTER_NAMER = ConfigKeys.newConfigKey(new TypeToken<Function<Location, String>>() {},
        "riak.fabric.cluster.namer", "Function used to provide the riak.replication.clusterName for a given location");
}
