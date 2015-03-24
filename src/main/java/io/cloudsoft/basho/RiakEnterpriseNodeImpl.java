package io.cloudsoft.basho;

import brooklyn.entity.nosql.riak.RiakNode;
import brooklyn.entity.nosql.riak.RiakNodeImpl;
import brooklyn.event.basic.AttributeSensorAndConfigKey;
import com.google.api.client.repackaged.com.google.common.base.Preconditions;

public class RiakEnterpriseNodeImpl extends RiakNodeImpl implements RiakEnterpriseNode {

    @Override
    public void init() {
        super.init();

        AttributeSensorAndConfigKey[] downloadProperties = {RiakNode.DOWNLOAD_URL_DEBIAN, RiakNode.DOWNLOAD_URL_UBUNTU, RiakNode.DOWNLOAD_URL_RHEL_CENTOS};
        String[] mapDownloadPropertiesToString = new String[downloadProperties.length];
        for(int i = 0; i < downloadProperties.length; i++) {
            mapDownloadPropertiesToString[i] = downloadProperties[i].getName();
        }

        Preconditions.checkNotNull(isPackageDownloadUrlProvided() ? RiakNode.DOWNLOAD_URL_RHEL_CENTOS : null,
                "For the enterprise version, You have to specify some of the possible: " + org.apache.commons.lang.StringUtils.join(mapDownloadPropertiesToString, ','));
    }

   @Override
   public RiakEnterpriseNodeDriver getDriver() {
      return (RiakEnterpriseNodeDriver) super.getDriver();
   }

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
   public void triggerFullSync() {
       getDriver().triggerFullSync();
   }
}
