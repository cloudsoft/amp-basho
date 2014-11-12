package io.cloudsoft.basho;

import brooklyn.config.ConfigKey;
import brooklyn.entity.basic.ConfigKeys;
import brooklyn.entity.nosql.riak.RiakNode;
import brooklyn.entity.proxying.ImplementedBy;

@ImplementedBy(RiakEnterpriseNodeImpl.class)
public interface RiakEnterpriseNode extends RiakNode {
    ConfigKey<String> RIAK_ADVANCED_CONFIG_TEMPLATE_URL = ConfigKeys.newStringConfigKey(
            "riak.advancedConfig.templateUrl", "Template file (in freemarker format) for the advanced.config file",
            "classpath://advanced.config");

    void initializeCluster(String name);

    void addReplicationSink(RiakEnterpriseCluster upCluster);
}
