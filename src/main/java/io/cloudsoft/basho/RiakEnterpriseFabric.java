package io.cloudsoft.basho;

import io.cloudsoft.basho.RiakEnterpriseNode.RiakOsType;

import org.apache.brooklyn.config.ConfigKey;
import org.apache.brooklyn.core.config.ConfigKeys;
import org.apache.brooklyn.core.sensor.AttributeSensorAndConfigKey;
import org.apache.brooklyn.entity.group.DynamicFabric;
import org.apache.brooklyn.util.core.flags.SetFromFlag;
import org.apache.brooklyn.api.entity.ImplementedBy;
import org.apache.brooklyn.api.location.Location;

import com.google.common.base.Function;
import com.google.common.reflect.TypeToken;

@ImplementedBy(RiakEnterpriseFabricImpl.class)
public interface RiakEnterpriseFabric extends DynamicFabric {
    
    @SuppressWarnings("serial")
    ConfigKey<? extends Function<Location,String>> CLUSTER_NAMER = ConfigKeys.newConfigKey(new TypeToken<Function<Location, String>>() {},
        "riak.fabric.cluster.namer", "Function used to provide the riak.replication.clusterName for a given location");
    
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
