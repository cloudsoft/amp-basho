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
    
    enum RiakOsType {
        /*

        http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/SAMPLE/2.1.3/debian/6/riak-ee_2.1.3-1_amd64.deb
        http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/SAMPLE/2.1.3/debian/7/riak-ee_2.1.3-1_amd64.deb
        http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/SAMPLE/2.1.3/ubuntu/precise/riak-ee_2.1.3-1_amd64.deb
        http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/SAMPLE/2.1.3/ubuntu/trusty/riak-ee_2.1.3-1_amd64.deb
        http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/SAMPLE/2.1.3/osx/10.8/riak-ee-2.1.3-OSX-x86_64.tar.gz
        http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/SAMPLE/2.1.3/rhel/5/riak-ee-2.1.3-1.el5.x86_64.rpm
        http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/SAMPLE/2.1.3/rhel/6/riak-ee-2.1.3-1.el6.x86_64.rpm
        http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/SAMPLE/2.1.3/rhel/7/riak-ee-2.1.3-1.el7.centos.x86_64.rpm

             */

        AUTODETECT(null,null,null), 
        NONE(null,null,null),
        
        UBUNTU_14_04("ubuntu", or(regexForVersion("14.04"),".*trusty.*"), ".*\\.deb"),
        UBUNTU_12_04("ubuntu", or(regexForVersion("12.04"),".*precise.*"), ".*\\.deb"),
        CENTOS_7("centos", regexForVersion("7"), ".*\\.rpm"), 
        CENTOS_6("centos", regexForVersion("6"), ".*\\.rpm"), 
        RHEL_7("rhel", regexForVersion("7"), ".*\\.rpm"), 
        RHEL_6("rhel", regexForVersion("6"), ".*\\.rpm"), 
        DEBIAN_7("debian", regexForVersion("7"), ".*\\.deb"), 
        DEBIAN_6("debian", regexForVersion("6"), ".*\\.deb"), 
        MAC("mac", null, ".*OSX.*");
        
        private static String regexForVersion(String v) {
            return "(.*[^0-9])?"+v+"([^0-9].*)?";
        }
        private static String or(String o1, String o2) {
            return "("+o1+"|"+o2+")";
        }
        
        String osFamily;
        String osVersionRegex;
        String urlVersionRegex;
        String urlRegex;
        
        RiakOsType(String osFamily, String versionRegex, String urlRegex) {
            this(osFamily, versionRegex, urlRegex, versionRegex);
        }
        
        RiakOsType(String osFamily, String osVersionRegex, String urlRegex, String urlVersionRegex) {
            this.osFamily = osFamily;
            this.osVersionRegex = osVersionRegex;
            this.urlRegex = urlRegex;
            this.urlVersionRegex = urlVersionRegex;
        }
        
        public String getOsFamily() {
            return osFamily;
        }
        /** regex to use when matching an os version in an image */
        public String getOsVersionRegex() {
            return osVersionRegex;
        }
        /** regex the url should match if we can infer a version */
        public String getUrlVersionRegex() {
            return urlVersionRegex;
        }
        /** regex the url should match if this is for the given os */
        public String getUrlRegex() {
            return urlRegex;
        }
    }
    
    @SetFromFlag("os")
    ConfigKey<RiakOsType> OS_TYPE = ConfigKeys.newConfigKey(RiakOsType.class, 
        "riak.os", 
        "The OS to request. "
        + "Default is to auto-detect based on the download url and "
        + "to ensure IP-tables and firewalls do not block Riak. "
        + "Use 'none' to disable inferencing and firewall reconfiguration.",
        RiakOsType.AUTODETECT);
    
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
