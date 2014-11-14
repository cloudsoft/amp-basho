package io.cloudsoft.basho;

import brooklyn.entity.nosql.riak.RiakNodeImpl;

public class RiakEnterpriseNodeImpl extends RiakNodeImpl implements RiakEnterpriseNode {

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
}
