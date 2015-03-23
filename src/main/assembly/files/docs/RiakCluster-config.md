---
---

# RiakCluster config keys

<br>

### cluster.initial.quorumSize

*description* Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if &lt; 0, then use value of INITIAL_SIZE) <br>
*value type* java.lang.Integer <br>
*default value* -1 <br>

<br>

### cluster.initial.size

*description* Initial cluster size <br>
*value type* java.lang.Integer <br>
*default value* 1 <br>

<br>

### dynamiccluster.availabilityZones

*description* availability zones to use (if non-null, overrides other configuration) <br>
*value type* java.util.Collection <br>
*default value* &nbsp; <br>

<br>

### dynamiccluster.customChildFlags

*description* Additional flags to be passed to children when they are being created <br>
*value type* java.util.Map <br>
*default value* [object Object] <br>

<br>

### dynamiccluster.factory

*description* factory for creating new cluster members <br>
*value type* brooklyn.entity.basic.EntityFactory <br>
*default value* &nbsp; <br>

<br>

### dynamiccluster.memberspec

*description* entity spec for creating new cluster members <br>
*value type* brooklyn.entity.proxying.EntitySpec <br>
*default value* &nbsp; <br>

<br>

### dynamiccluster.numAvailabilityZones

*description* number of availability zones to use (will attempt to auto-discover this number) <br>
*value type* java.lang.Integer <br>
*default value* &nbsp; <br>

<br>

### dynamiccluster.quarantineFailedEntities

*description* If true, will quarantine entities that fail to start; if false, will get rid of them (i.e. delete them) <br>
*value type* java.lang.Boolean <br>
*default value* true <br>

<br>

### dynamiccluster.removalstrategy

*description* strategy for deciding what to remove when down-sizing <br>
*value type* com.google.common.base.Function <br>
*default value* &nbsp; <br>

<br>

### dynamiccluster.zone.enable

*description* Whether to use availability zones, or just deploy everything into the generic location <br>
*value type* java.lang.Boolean <br>
*default value* &nbsp; <br>

<br>

### dynamiccluster.zone.failureDetector

*description* Zone failure detector <br>
*value type* brooklyn.entity.group.DynamicCluster$ZoneFailureDetector <br>
*default value* brooklyn.entity.group.zoneaware.ProportionalZoneFailureDetector@488ace42 <br>

<br>

### dynamiccluster.zone.placementStrategy

*description* Node placement strategy <br>
*value type* brooklyn.entity.group.DynamicCluster$NodePlacementStrategy <br>
*default value* brooklyn.entity.group.zoneaware.BalancingNodePlacementStrategy@a1fbb50 <br>

<br>

### enricher.service_state.children_and_members.quorum.running

*description* Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire <br>
*value type* brooklyn.util.collections.QuorumCheck <br>
*default value* QuorumCheck[all;require=0,100.0%] <br>

<br>

### enricher.service_state.children_and_members.quorum.up

*description* Up check, applied by default to members, requiring at least one present and up <br>
*value type* brooklyn.util.collections.QuorumCheck <br>
*default value* QuorumCheck[atLeastOne;require=1,0.0%] <br>

<br>

### group.members.delegate

*description* Add delegate child entities for members of the group <br>
*value type* java.lang.Boolean <br>
*default value* &nbsp; <br>

<br>

### group.members.delegate.nameFormat

*description* Delegate members name format string (Use %s for the original entity display name) <br>
*value type* java.lang.String <br>
*default value* %s <br>

<br>

### riak.cluster.delayBeforeAdvertisingCluster

*description* Delay after cluster is started before checking and advertising its availability <br>
*value type* brooklyn.util.time.Duration <br>
*default value* 2m <br>

## RiakEnterpriseNode

The properties bellow are only available in the amp-basho (the enterprise brooklyn module for riak)

### riak.cluster.clusterName

*description* Unique name of the cluster, used in multi-datacenter replication<br>
*value type* String<br>
*default value* 

<br>

<!--
### 

*description* 
*value type* 
*default value* 

<br>
-->


