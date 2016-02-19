package io.cloudsoft.basho;

import org.apache.brooklyn.api.entity.ImplementedBy;
import org.apache.brooklyn.config.ConfigKey;
import org.apache.brooklyn.core.config.ConfigKeys;
import org.apache.brooklyn.core.sensor.AttributeSensorAndConfigKey;
import org.apache.brooklyn.core.sensor.BasicAttributeSensorAndConfigKey;
import org.apache.brooklyn.core.sensor.PortAttributeSensorAndConfigKey;
import org.apache.brooklyn.entity.nosql.riak.RiakNode;
import org.apache.brooklyn.util.core.flags.SetFromFlag;

import com.google.common.annotations.Beta;

@ImplementedBy(RiakEnterpriseNodeImpl.class)
public interface RiakEnterpriseNode extends RiakNode {
    ConfigKey<String> RIAK_ADVANCED_CONFIG_TEMPLATE_URL = ConfigKeys.newStringConfigKey(
            "riak.advancedConfig.templateUrl", "URL of Template file (in freemarker format) for the advanced.config file",
            "classpath://advanced.config");

    PortAttributeSensorAndConfigKey CLUSTER_MANAGER_PORT = new PortAttributeSensorAndConfigKey("riak.replication.cluster.manager.port",
            "Cluster Manager Port", "9080+");

    @SetFromFlag("downloadUrlRhelCentos")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_RHEL_CENTOS = 
        Helper.newSensorConfigKey(RiakNode.DOWNLOAD_URL_RHEL_CENTOS, "");

    @SetFromFlag("downloadUrlUbuntu")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_UBUNTU = 
        Helper.newSensorConfigKey(RiakNode.DOWNLOAD_URL_UBUNTU, "");
    
    @SetFromFlag("downloadUrlDebian")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_DEBIAN = 
        Helper.newSensorConfigKey(RiakNode.DOWNLOAD_URL_DEBIAN, "");

    @SetFromFlag("downloadUrlMac")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL_MAC = 
        Helper.newSensorConfigKey(RiakNode.DOWNLOAD_URL_MAC, "");

    @SetFromFlag("downloadUrl")
    AttributeSensorAndConfigKey<String, String> DOWNLOAD_URL = 
        Helper.newSensorConfigKey(RiakNode.DOWNLOAD_URL, "");
    
    void initializeReplication(String name);

    void triggerFullSync(String clusterName);

    void addReplicationSink(RiakEnterpriseCluster upCluster);

    Integer getRiakClusterManagerPort();
    
    static class Helper {
        @Beta
        public static <T> AttributeSensorAndConfigKey<T, T> newSensorConfigKey(AttributeSensorAndConfigKey<T, T> orig, T newDefaultValue) {
            return new BasicAttributeSensorAndConfigKey<T>(orig, newDefaultValue);
        }
    }
}
