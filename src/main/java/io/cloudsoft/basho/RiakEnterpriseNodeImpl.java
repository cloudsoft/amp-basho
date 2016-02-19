package io.cloudsoft.basho;

import java.util.List;

import org.apache.brooklyn.core.sensor.AttributeSensorAndConfigKey;
import org.apache.brooklyn.entity.nosql.riak.RiakNodeImpl;
import org.apache.brooklyn.util.text.Strings;

import com.google.api.client.repackaged.com.google.common.base.Preconditions;
import com.google.common.collect.ImmutableList;

public class RiakEnterpriseNodeImpl extends RiakNodeImpl implements RiakEnterpriseNode {

    @Override
    public void init() {
        super.init();

        List<AttributeSensorAndConfigKey<String,String>> downloadUrlConfigs = ImmutableList.of( 
                RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU, 
                RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS,
                RiakEnterpriseNode.DOWNLOAD_URL_DEBIAN, 
                RiakEnterpriseNode.DOWNLOAD_URL_MAC);
        
        String defaultDownload = getConfig(RiakEnterpriseNode.DOWNLOAD_URL);
        boolean found = false;
        for (AttributeSensorAndConfigKey<String,String> key: downloadUrlConfigs) {
            if (Strings.isBlank( getConfig(key) )) {
                if (Strings.isNonBlank(defaultDownload)) {
                    config().set(key, defaultDownload);
                    found = true;
                } else {
                    config().set(key, "URL_MISSING__"+key.getName());
                }
            } else {
                found = true;
            }
        }

        Preconditions.checkArgument(found,
                "At least one enterprise download URL must be supplied for the enterprise edition, such as "
                + RiakEnterpriseNode.DOWNLOAD_URL.getName());
    }

   @Override
   public RiakEnterpriseNodeDriver getDriver() {
      return (RiakEnterpriseNodeDriver) super.getDriver();
   }

   @SuppressWarnings({ "rawtypes", "unchecked" })
   @Override
   public Class getDriverInterface() {
      return RiakEnterpriseNodeDriver.class;
   }

   @Override
   public void initializeReplication(String name) {
      getDriver().initializeCluster(name);
   }

   @Override
   public void addReplicationSink(RiakEnterpriseCluster upCluster) {
      getDriver().addReplicationSink(upCluster);
   }

   @Override
   public Integer getRiakClusterManagerPort() {
      return getAttribute(CLUSTER_MANAGER_PORT);
   }

   @Override
   public void triggerFullSync(String clusterName) {
       getDriver().triggerFullSync(clusterName);
   }
}
