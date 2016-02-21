var items = {
  "entities" : [ {
    "type" : "io.cloudsoft.basho.RiakEnterpriseCluster",
    "name" : "io.cloudsoft.basho.RiakEnterpriseCluster",
    "description" : "",
    "config" : [ {
      "name" : "cluster.initial.quorumSize",
      "type" : "java.lang.Integer",
      "description" : "Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if < 0, then use value of INITIAL_SIZE)",
      "defaultValue" : -1,
      "reconfigurable" : false
    }, {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "description" : "Initial cluster size",
      "defaultValue" : 1,
      "reconfigurable" : false
    }, {
      "name" : "cluster.member.id",
      "type" : "java.lang.Integer",
      "description" : "The unique ID number (sequential) of a member of a cluster",
      "reconfigurable" : false
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.availabilityZones",
      "type" : "java.util.Collection",
      "description" : "availability zones to use (if non-null, overrides other configuration)",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.customChildFlags",
      "type" : "java.util.Map",
      "description" : "Additional flags to be passed to children when they are being created",
      "defaultValue" : { },
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "org.apache.brooklyn.core.entity.factory.EntityFactory",
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.firstmemberspec",
      "type" : "org.apache.brooklyn.api.entity.EntitySpec",
      "description" : "entity spec for creating new cluster members, used for the very first member if different",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "org.apache.brooklyn.api.entity.EntitySpec",
      "description" : "entity spec for creating new cluster members",
      "defaultValue" : "EntitySpec{type=interface io.cloudsoft.basho.RiakEnterpriseNode}@6d467e74",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.numAvailabilityZones",
      "type" : "java.lang.Integer",
      "description" : "number of availability zones to use (will attempt to auto-discover this number)",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.quarantineFailedEntities",
      "type" : "java.lang.Boolean",
      "description" : "If true, will quarantine entities that fail to start; if false, will get rid of them (i.e. delete them)",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.quarantineFilter",
      "type" : "com.google.common.base.Predicate",
      "description" : "Quarantine the failed nodes that pass this filter (given the exception thrown by the node). Default is those that did not fail with NoMachinesAvailableException (Config ignored if quarantineFailedEntities is false)",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.removalstrategy",
      "type" : "com.google.common.base.Function",
      "description" : "strategy for deciding what to remove when down-sizing",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.restartMode",
      "type" : "java.lang.String",
      "description" : "How this cluster should handle restarts; by default it is disallowed, but this key can specify a different mode. Modes supported by dynamic cluster are 'off', 'sequqential', or 'parallel'. However subclasses can define their own modes or may ignore this.",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.zone.enable",
      "type" : "java.lang.Boolean",
      "description" : "Whether to use availability zones, or just deploy everything into the generic location",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.zone.failureDetector",
      "type" : "org.apache.brooklyn.entity.group.DynamicCluster$ZoneFailureDetector",
      "description" : "Zone failure detector",
      "defaultValue" : "org.apache.brooklyn.entity.group.zoneaware.ProportionalZoneFailureDetector@4ca16872",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.zone.placementStrategy",
      "type" : "org.apache.brooklyn.entity.group.DynamicCluster$NodePlacementStrategy",
      "description" : "Node placement strategy",
      "defaultValue" : "org.apache.brooklyn.entity.group.zoneaware.BalancingNodePlacementStrategy@2566d85e",
      "reconfigurable" : false
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "reconfigurable" : false
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "reconfigurable" : false
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "description" : "Deprecated: Add delegate child entities for members of the group",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "defaultValue" : "%s",
      "reconfigurable" : false
    }, {
      "name" : "riak.cluster.clusterName",
      "type" : "java.lang.String",
      "description" : "Unique name of the cluster, used in multi-datacenter replication",
      "reconfigurable" : false
    }, {
      "name" : "riak.cluster.delayBeforeAdvertisingCluster",
      "type" : "org.apache.brooklyn.util.time.Duration",
      "description" : "Delay after cluster is started before checking and advertising its availability",
      "defaultValue" : "2m",
      "reconfigurable" : false
    }, {
      "name" : "riak.os",
      "type" : "java.lang.Enum",
      "description" : "The OS to request. Default is to auto-detect based on the download url and to ensure IP-tables and firewalls do not block Riak. Use 'none' to disable inferencing and firewall reconfiguration.",
      "defaultValue" : "AUTODETECT",
      "reconfigurable" : false,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "UBUNTU_14_04",
        "description" : "UBUNTU_14_04"
      }, {
        "value" : "UBUNTU_12_04",
        "description" : "UBUNTU_12_04"
      }, {
        "value" : "CENTOS_7",
        "description" : "CENTOS_7"
      }, {
        "value" : "CENTOS_6",
        "description" : "CENTOS_6"
      }, {
        "value" : "RHEL_7",
        "description" : "RHEL_7"
      }, {
        "value" : "RHEL_6",
        "description" : "RHEL_6"
      }, {
        "value" : "DEBIAN_7",
        "description" : "DEBIAN_7"
      }, {
        "value" : "DEBIAN_6",
        "description" : "DEBIAN_6"
      }, {
        "value" : "MAC",
        "description" : "MAC"
      } ]
    } ],
    "sensors" : [ {
      "name" : "cluster.entity",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "The cluster an entity is a member of",
      "links" : { }
    }, {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "cluster.member",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is a member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.one_and_all.members.up",
      "type" : "java.lang.Boolean",
      "description" : "True cluster is running, there is on member, and all members are service.isUp",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "dynamiccluster.entityQuarantined",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Entity failed to start, and has been quarantined",
      "links" : { }
    }, {
      "name" : "dynamiccluster.failedSubLocations",
      "type" : "java.util.Set",
      "description" : "Sub locations that seem to have failed",
      "links" : { }
    }, {
      "name" : "dynamiccluster.quarantineGroup",
      "type" : "org.apache.brooklyn.entity.group.QuarantineGroup",
      "description" : "Group of quarantined entities that failed to start",
      "links" : { }
    }, {
      "name" : "dynamiccluster.subLocations",
      "type" : "java.util.List",
      "description" : "Locations for each availability zone to use",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "main.uri",
      "type" : "java.net.URI",
      "description" : "Main URI for contacting the service/endpoint offered by this entity",
      "links" : { }
    }, {
      "name" : "riak.cluster.clusterName",
      "type" : "java.lang.String",
      "description" : "Unique name of the cluster, used in multi-datacenter replication",
      "links" : { }
    }, {
      "name" : "riak.cluster.isClusterInit",
      "type" : "java.lang.Boolean",
      "description" : "Flag to determine if the cluster was already initialized",
      "links" : { }
    }, {
      "name" : "riak.cluster.isFirstNodeSet",
      "type" : "java.lang.Boolean",
      "description" : "Flag to determine if the first node has been set",
      "links" : { }
    }, {
      "name" : "riak.cluster.nodeList",
      "type" : "java.lang.String",
      "description" : "List of nodes (including ports), comma separated",
      "links" : { }
    }, {
      "name" : "riak.cluster.nodeListPbPort",
      "type" : "java.lang.String",
      "description" : "List of nodes (including ports for riak db clients), comma separated",
      "links" : { }
    }, {
      "name" : "riak.cluster.nodes",
      "type" : "java.util.Map",
      "description" : "Names of all active Riak nodes in the cluster <Entity,Riak Name>",
      "links" : { }
    }, {
      "name" : "riak.cluster.replication.sinks",
      "type" : "java.util.Set",
      "description" : "Set of RiakEnterpriseClusters currently acting as replication sinks to this cluster",
      "links" : { }
    }, {
      "name" : "riak.node.gets.1m.perNode",
      "type" : "java.lang.Integer",
      "description" : "Gets in the last minute, averaged across cluster",
      "links" : { }
    }, {
      "name" : "riak.node.ops.1m.perNode",
      "type" : "java.lang.Integer",
      "description" : "Sum of node gets and puts in the last minute, averaged across cluster",
      "links" : { }
    }, {
      "name" : "riak.node.puts.1m.perNode",
      "type" : "java.lang.Integer",
      "description" : "Puts in the last minute, averaged across cluster",
      "links" : { }
    }, {
      "name" : "riak.replication.initialized",
      "type" : "java.lang.Boolean",
      "description" : "Indicates that the cluster has been initialized and is ready to participate in MDC replication",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "replaceMember",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "memberId",
        "type" : "java.lang.String",
        "description" : "The entity id of a member to be replaced",
        "defaultValue" : null
      } ],
      "description" : "Replaces the entity with the given ID, if it is a member; first adds a new member, then removes this one. Returns id of the new entity; or throws exception if couldn't be replaced."
    }, {
      "name" : "resize",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "desiredSize",
        "type" : "java.lang.Integer",
        "description" : "The new size of the cluster",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the entity (e.g. the number of nodes in a cluster)"
    }, {
      "name" : "resizeByDelta",
      "returnType" : "java.util.Collection",
      "parameters" : [ {
        "name" : "delta",
        "type" : "int",
        "description" : "The change in number of nodes",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the cluster."
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity"
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity"
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity"
    }, {
      "name" : "triggerFullSync",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "clusterSink",
        "type" : "java.lang.String",
        "description" : "cluster to make sync with",
        "defaultValue" : null
      } ],
      "description" : "Manually initiates a fullsync operation with connected sites."
    } ]
  }, {
    "type" : "io.cloudsoft.basho.RiakEnterpriseClusterImpl",
    "name" : "io.cloudsoft.basho.RiakEnterpriseClusterImpl",
    "description" : "",
    "config" : [ {
      "name" : "cluster.initial.quorumSize",
      "type" : "java.lang.Integer",
      "description" : "Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if < 0, then use value of INITIAL_SIZE)",
      "defaultValue" : -1,
      "reconfigurable" : false
    }, {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "description" : "Initial cluster size",
      "defaultValue" : 1,
      "reconfigurable" : false
    }, {
      "name" : "cluster.member.id",
      "type" : "java.lang.Integer",
      "description" : "The unique ID number (sequential) of a member of a cluster",
      "reconfigurable" : false
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.availabilityZones",
      "type" : "java.util.Collection",
      "description" : "availability zones to use (if non-null, overrides other configuration)",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.customChildFlags",
      "type" : "java.util.Map",
      "description" : "Additional flags to be passed to children when they are being created",
      "defaultValue" : { },
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "org.apache.brooklyn.core.entity.factory.EntityFactory",
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.firstmemberspec",
      "type" : "org.apache.brooklyn.api.entity.EntitySpec",
      "description" : "entity spec for creating new cluster members, used for the very first member if different",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "org.apache.brooklyn.api.entity.EntitySpec",
      "description" : "entity spec for creating new cluster members",
      "defaultValue" : "EntitySpec{type=interface io.cloudsoft.basho.RiakEnterpriseNode}@6d467e74",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.numAvailabilityZones",
      "type" : "java.lang.Integer",
      "description" : "number of availability zones to use (will attempt to auto-discover this number)",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.quarantineFailedEntities",
      "type" : "java.lang.Boolean",
      "description" : "If true, will quarantine entities that fail to start; if false, will get rid of them (i.e. delete them)",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.quarantineFilter",
      "type" : "com.google.common.base.Predicate",
      "description" : "Quarantine the failed nodes that pass this filter (given the exception thrown by the node). Default is those that did not fail with NoMachinesAvailableException (Config ignored if quarantineFailedEntities is false)",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.removalstrategy",
      "type" : "com.google.common.base.Function",
      "description" : "strategy for deciding what to remove when down-sizing",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.restartMode",
      "type" : "java.lang.String",
      "description" : "How this cluster should handle restarts; by default it is disallowed, but this key can specify a different mode. Modes supported by dynamic cluster are 'off', 'sequqential', or 'parallel'. However subclasses can define their own modes or may ignore this.",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.zone.enable",
      "type" : "java.lang.Boolean",
      "description" : "Whether to use availability zones, or just deploy everything into the generic location",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.zone.failureDetector",
      "type" : "org.apache.brooklyn.entity.group.DynamicCluster$ZoneFailureDetector",
      "description" : "Zone failure detector",
      "defaultValue" : "org.apache.brooklyn.entity.group.zoneaware.ProportionalZoneFailureDetector@4ca16872",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccluster.zone.placementStrategy",
      "type" : "org.apache.brooklyn.entity.group.DynamicCluster$NodePlacementStrategy",
      "description" : "Node placement strategy",
      "defaultValue" : "org.apache.brooklyn.entity.group.zoneaware.BalancingNodePlacementStrategy@2566d85e",
      "reconfigurable" : false
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "reconfigurable" : false
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "reconfigurable" : false
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "description" : "Deprecated: Add delegate child entities for members of the group",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "defaultValue" : "%s",
      "reconfigurable" : false
    }, {
      "name" : "riak.cluster.clusterName",
      "type" : "java.lang.String",
      "description" : "Unique name of the cluster, used in multi-datacenter replication",
      "reconfigurable" : false
    }, {
      "name" : "riak.cluster.delayBeforeAdvertisingCluster",
      "type" : "org.apache.brooklyn.util.time.Duration",
      "description" : "Delay after cluster is started before checking and advertising its availability",
      "defaultValue" : "2m",
      "reconfigurable" : false
    }, {
      "name" : "riak.os",
      "type" : "java.lang.Enum",
      "description" : "The OS to request. Default is to auto-detect based on the download url and to ensure IP-tables and firewalls do not block Riak. Use 'none' to disable inferencing and firewall reconfiguration.",
      "defaultValue" : "AUTODETECT",
      "reconfigurable" : false,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "UBUNTU_14_04",
        "description" : "UBUNTU_14_04"
      }, {
        "value" : "UBUNTU_12_04",
        "description" : "UBUNTU_12_04"
      }, {
        "value" : "CENTOS_7",
        "description" : "CENTOS_7"
      }, {
        "value" : "CENTOS_6",
        "description" : "CENTOS_6"
      }, {
        "value" : "RHEL_7",
        "description" : "RHEL_7"
      }, {
        "value" : "RHEL_6",
        "description" : "RHEL_6"
      }, {
        "value" : "DEBIAN_7",
        "description" : "DEBIAN_7"
      }, {
        "value" : "DEBIAN_6",
        "description" : "DEBIAN_6"
      }, {
        "value" : "MAC",
        "description" : "MAC"
      } ]
    } ],
    "sensors" : [ {
      "name" : "cluster.entity",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "The cluster an entity is a member of",
      "links" : { }
    }, {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "cluster.member",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is a member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.one_and_all.members.up",
      "type" : "java.lang.Boolean",
      "description" : "True cluster is running, there is on member, and all members are service.isUp",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "dynamiccluster.entityQuarantined",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Entity failed to start, and has been quarantined",
      "links" : { }
    }, {
      "name" : "dynamiccluster.failedSubLocations",
      "type" : "java.util.Set",
      "description" : "Sub locations that seem to have failed",
      "links" : { }
    }, {
      "name" : "dynamiccluster.quarantineGroup",
      "type" : "org.apache.brooklyn.entity.group.QuarantineGroup",
      "description" : "Group of quarantined entities that failed to start",
      "links" : { }
    }, {
      "name" : "dynamiccluster.subLocations",
      "type" : "java.util.List",
      "description" : "Locations for each availability zone to use",
      "links" : { }
    }, {
      "name" : "entity.children.added",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Child dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.children.removed",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Child dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.config_key.added",
      "type" : "org.apache.brooklyn.config.ConfigKey",
      "description" : "ConfigKey dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.config_key.removed",
      "type" : "org.apache.brooklyn.config.ConfigKey",
      "description" : "ConfigKey dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.effector.added",
      "type" : "java.lang.String",
      "description" : "Effector dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.effector.changed",
      "type" : "java.lang.String",
      "description" : "Effector dynamically changed on entity",
      "links" : { }
    }, {
      "name" : "entity.effector.removed",
      "type" : "java.lang.String",
      "description" : "Effector dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.group.added",
      "type" : "org.apache.brooklyn.api.entity.Group",
      "description" : "Group dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.group.removed",
      "type" : "org.apache.brooklyn.api.entity.Group",
      "description" : "Group dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.location.added",
      "type" : "org.apache.brooklyn.api.location.Location",
      "description" : "Location dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.location.removed",
      "type" : "org.apache.brooklyn.api.location.Location",
      "description" : "Location dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.policy.added",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.PolicyDescriptor",
      "description" : "Policy dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.policy.removed",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.PolicyDescriptor",
      "description" : "Policy dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.sensor.added",
      "type" : "org.apache.brooklyn.api.sensor.Sensor",
      "description" : "Sensor dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.sensor.removed",
      "type" : "org.apache.brooklyn.api.sensor.Sensor",
      "description" : "Sensor dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "main.uri",
      "type" : "java.net.URI",
      "description" : "Main URI for contacting the service/endpoint offered by this entity",
      "links" : { }
    }, {
      "name" : "riak.cluster.clusterName",
      "type" : "java.lang.String",
      "description" : "Unique name of the cluster, used in multi-datacenter replication",
      "links" : { }
    }, {
      "name" : "riak.cluster.isClusterInit",
      "type" : "java.lang.Boolean",
      "description" : "Flag to determine if the cluster was already initialized",
      "links" : { }
    }, {
      "name" : "riak.cluster.isFirstNodeSet",
      "type" : "java.lang.Boolean",
      "description" : "Flag to determine if the first node has been set",
      "links" : { }
    }, {
      "name" : "riak.cluster.nodeList",
      "type" : "java.lang.String",
      "description" : "List of nodes (including ports), comma separated",
      "links" : { }
    }, {
      "name" : "riak.cluster.nodeListPbPort",
      "type" : "java.lang.String",
      "description" : "List of nodes (including ports for riak db clients), comma separated",
      "links" : { }
    }, {
      "name" : "riak.cluster.nodes",
      "type" : "java.util.Map",
      "description" : "Names of all active Riak nodes in the cluster <Entity,Riak Name>",
      "links" : { }
    }, {
      "name" : "riak.cluster.replication.sinks",
      "type" : "java.util.Set",
      "description" : "Set of RiakEnterpriseClusters currently acting as replication sinks to this cluster",
      "links" : { }
    }, {
      "name" : "riak.node.gets.1m.perNode",
      "type" : "java.lang.Integer",
      "description" : "Gets in the last minute, averaged across cluster",
      "links" : { }
    }, {
      "name" : "riak.node.ops.1m.perNode",
      "type" : "java.lang.Integer",
      "description" : "Sum of node gets and puts in the last minute, averaged across cluster",
      "links" : { }
    }, {
      "name" : "riak.node.puts.1m.perNode",
      "type" : "java.lang.Integer",
      "description" : "Puts in the last minute, averaged across cluster",
      "links" : { }
    }, {
      "name" : "riak.replication.initialized",
      "type" : "java.lang.Boolean",
      "description" : "Indicates that the cluster has been initialized and is ready to participate in MDC replication",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "replaceMember",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "memberId",
        "type" : "java.lang.String",
        "description" : "The entity id of a member to be replaced",
        "defaultValue" : null
      } ],
      "description" : "Replaces the entity with the given ID, if it is a member; first adds a new member, then removes this one. Returns id of the new entity; or throws exception if couldn't be replaced."
    }, {
      "name" : "resize",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "desiredSize",
        "type" : "java.lang.Integer",
        "description" : "The new size of the cluster",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the entity (e.g. the number of nodes in a cluster)"
    }, {
      "name" : "resizeByDelta",
      "returnType" : "java.util.Collection",
      "parameters" : [ {
        "name" : "delta",
        "type" : "int",
        "description" : "The change in number of nodes",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the cluster."
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity"
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity"
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity"
    }, {
      "name" : "triggerFullSync",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "clusterSink",
        "type" : "java.lang.String",
        "description" : "cluster to make sync with",
        "defaultValue" : null
      } ],
      "description" : "Manually initiates a fullsync operation with connected sites."
    } ]
  }, {
    "type" : "io.cloudsoft.basho.RiakEnterpriseFabric",
    "name" : "io.cloudsoft.basho.RiakEnterpriseFabric",
    "description" : "",
    "config" : [ {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccfabric.memberspec",
      "type" : "org.apache.brooklyn.api.entity.EntitySpec",
      "description" : "entity spec for creating new cluster members",
      "reconfigurable" : false
    }, {
      "name" : "dynamicfabric.customChildFlags",
      "type" : "java.util.Map",
      "description" : "Additional flags to be passed to children when they are being created",
      "defaultValue" : { },
      "reconfigurable" : false
    }, {
      "name" : "dynamicfabric.displayNamePrefix",
      "type" : "java.lang.String",
      "description" : "Display name prefix, for created children",
      "reconfigurable" : false
    }, {
      "name" : "dynamicfabric.displayNameSuffix",
      "type" : "java.lang.String",
      "description" : "Display name suffix, for created children",
      "reconfigurable" : false
    }, {
      "name" : "dynamicfabric.factory",
      "type" : "org.apache.brooklyn.core.entity.factory.EntityFactory",
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "reconfigurable" : false
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "reconfigurable" : false
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "description" : "Deprecated: Add delegate child entities for members of the group",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "defaultValue" : "%s",
      "reconfigurable" : false
    }, {
      "name" : "riak.fabric.cluster.namer",
      "type" : "com.google.common.base.Function",
      "description" : "Function used to provide the riak.replication.clusterName for a given location",
      "reconfigurable" : false
    }, {
      "name" : "riak.os",
      "type" : "java.lang.Enum",
      "description" : "The OS to request. Default is to auto-detect based on the download url and to ensure IP-tables and firewalls do not block Riak. Use 'none' to disable inferencing and firewall reconfiguration.",
      "defaultValue" : "AUTODETECT",
      "reconfigurable" : false,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "UBUNTU_14_04",
        "description" : "UBUNTU_14_04"
      }, {
        "value" : "UBUNTU_12_04",
        "description" : "UBUNTU_12_04"
      }, {
        "value" : "CENTOS_7",
        "description" : "CENTOS_7"
      }, {
        "value" : "CENTOS_6",
        "description" : "CENTOS_6"
      }, {
        "value" : "RHEL_7",
        "description" : "RHEL_7"
      }, {
        "value" : "RHEL_6",
        "description" : "RHEL_6"
      }, {
        "value" : "DEBIAN_7",
        "description" : "DEBIAN_7"
      }, {
        "value" : "DEBIAN_6",
        "description" : "DEBIAN_6"
      }, {
        "value" : "MAC",
        "description" : "MAC"
      } ]
    } ],
    "sensors" : [ {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "fabric.size",
      "type" : "java.lang.Integer",
      "description" : "Fabric size",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity"
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity"
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity"
    } ]
  }, {
    "type" : "io.cloudsoft.basho.RiakEnterpriseFabricImpl",
    "name" : "io.cloudsoft.basho.RiakEnterpriseFabricImpl",
    "description" : "",
    "config" : [ {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "dynamiccfabric.memberspec",
      "type" : "org.apache.brooklyn.api.entity.EntitySpec",
      "description" : "entity spec for creating new cluster members",
      "reconfigurable" : false
    }, {
      "name" : "dynamicfabric.customChildFlags",
      "type" : "java.util.Map",
      "description" : "Additional flags to be passed to children when they are being created",
      "defaultValue" : { },
      "reconfigurable" : false
    }, {
      "name" : "dynamicfabric.displayNamePrefix",
      "type" : "java.lang.String",
      "description" : "Display name prefix, for created children",
      "reconfigurable" : false
    }, {
      "name" : "dynamicfabric.displayNameSuffix",
      "type" : "java.lang.String",
      "description" : "Display name suffix, for created children",
      "reconfigurable" : false
    }, {
      "name" : "dynamicfabric.factory",
      "type" : "org.apache.brooklyn.core.entity.factory.EntityFactory",
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "reconfigurable" : false
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "reconfigurable" : false
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "description" : "Deprecated: Add delegate child entities for members of the group",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "defaultValue" : "%s",
      "reconfigurable" : false
    }, {
      "name" : "riak.fabric.cluster.namer",
      "type" : "com.google.common.base.Function",
      "description" : "Function used to provide the riak.replication.clusterName for a given location",
      "reconfigurable" : false
    }, {
      "name" : "riak.os",
      "type" : "java.lang.Enum",
      "description" : "The OS to request. Default is to auto-detect based on the download url and to ensure IP-tables and firewalls do not block Riak. Use 'none' to disable inferencing and firewall reconfiguration.",
      "defaultValue" : "AUTODETECT",
      "reconfigurable" : false,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "UBUNTU_14_04",
        "description" : "UBUNTU_14_04"
      }, {
        "value" : "UBUNTU_12_04",
        "description" : "UBUNTU_12_04"
      }, {
        "value" : "CENTOS_7",
        "description" : "CENTOS_7"
      }, {
        "value" : "CENTOS_6",
        "description" : "CENTOS_6"
      }, {
        "value" : "RHEL_7",
        "description" : "RHEL_7"
      }, {
        "value" : "RHEL_6",
        "description" : "RHEL_6"
      }, {
        "value" : "DEBIAN_7",
        "description" : "DEBIAN_7"
      }, {
        "value" : "DEBIAN_6",
        "description" : "DEBIAN_6"
      }, {
        "value" : "MAC",
        "description" : "MAC"
      } ]
    } ],
    "sensors" : [ {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "entity.children.added",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Child dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.children.removed",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Child dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.config_key.added",
      "type" : "org.apache.brooklyn.config.ConfigKey",
      "description" : "ConfigKey dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.config_key.removed",
      "type" : "org.apache.brooklyn.config.ConfigKey",
      "description" : "ConfigKey dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.effector.added",
      "type" : "java.lang.String",
      "description" : "Effector dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.effector.changed",
      "type" : "java.lang.String",
      "description" : "Effector dynamically changed on entity",
      "links" : { }
    }, {
      "name" : "entity.effector.removed",
      "type" : "java.lang.String",
      "description" : "Effector dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.group.added",
      "type" : "org.apache.brooklyn.api.entity.Group",
      "description" : "Group dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.group.removed",
      "type" : "org.apache.brooklyn.api.entity.Group",
      "description" : "Group dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.location.added",
      "type" : "org.apache.brooklyn.api.location.Location",
      "description" : "Location dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.location.removed",
      "type" : "org.apache.brooklyn.api.location.Location",
      "description" : "Location dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.policy.added",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.PolicyDescriptor",
      "description" : "Policy dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.policy.removed",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.PolicyDescriptor",
      "description" : "Policy dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.sensor.added",
      "type" : "org.apache.brooklyn.api.sensor.Sensor",
      "description" : "Sensor dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.sensor.removed",
      "type" : "org.apache.brooklyn.api.sensor.Sensor",
      "description" : "Sensor dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "fabric.size",
      "type" : "java.lang.Integer",
      "description" : "Fabric size",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity"
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity"
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity"
    } ]
  }, {
    "type" : "io.cloudsoft.basho.RiakEnterpriseNode",
    "defaultVersion" : "2.0.5",
    "name" : "io.cloudsoft.basho.RiakEnterpriseNode",
    "description" : "",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "description" : "Controls behaviour when starting Startable children as part of this entity's lifecycle.",
      "defaultValue" : "NONE",
      "reconfigurable" : false,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ]
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false
    }, {
      "name" : "dontRequireTtyForSudo",
      "type" : "java.lang.Boolean",
      "description" : "Whether to explicitly set /etc/sudoers, so don't need tty (will leave unchanged if 'false'); some machines require a tty for sudo; brooklyn by default does not use a tty (so that it can get separate error+stdout streams); you can enable a tty as an option to every ssh command, or you can do it once and modify the machine so that a tty is not subsequently required.",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false
    }, {
      "name" : "epmdListenerPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Erlang Port Mapper Daemon Listener Port",
      "defaultValue" : "4369",
      "reconfigurable" : false
    }, {
      "name" : "erlangPortRangeEnd",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Erlang Port Range End",
      "defaultValue" : "7999-65535",
      "reconfigurable" : false
    }, {
      "name" : "erlangPortRangeStart",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Erlang Port Range Start",
      "defaultValue" : "6000-65535",
      "reconfigurable" : false
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false
    }, {
      "name" : "files.preinstall",
      "type" : "java.util.Map",
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false
    }, {
      "name" : "handoffListenerPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Handoff Listener Port",
      "defaultValue" : "8099-65535",
      "reconfigurable" : false
    }, {
      "name" : "httpMonitoring.enabled",
      "type" : "java.lang.Boolean",
      "description" : "HTTP(S) monitoring enabled",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "inboundPorts.autoInfer",
      "type" : "java.lang.Boolean",
      "description" : "If set to false turns off the opening of ports based on naming convention, and also those that are of type PortRange in Java entities",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "inboundPorts.configRegex",
      "type" : "java.lang.String",
      "description" : "Regex governing the opening of ports based on config names",
      "defaultValue" : ".*\\.port",
      "reconfigurable" : false
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "reconfigurable" : false
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "description" : "Version to install (Default 2.0.5)",
      "defaultValue" : "2.0.5",
      "reconfigurable" : false
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "description" : "Java command line options",
      "defaultValue" : [ ],
      "reconfigurable" : false
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "description" : "Java command line system properties",
      "defaultValue" : { },
      "reconfigurable" : false
    }, {
      "name" : "java.version.required",
      "type" : "java.lang.String",
      "description" : "Java version required",
      "defaultValue" : "1.7",
      "reconfigurable" : false
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false
    }, {
      "name" : "metrics.usage.retrieve",
      "type" : "java.lang.Boolean",
      "description" : "Whether to retrieve the usage (e.g. performance) metrics",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "openIptables",
      "type" : "java.lang.Boolean",
      "description" : "Whether to open the INBOUND_PORTS via iptables rules; if true then ssh in to run iptables commands, as part of machine provisioning",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "post.customize.command",
      "type" : "java.lang.String",
      "description" : "Command to be run after the customize method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "pre.customize.command",
      "type" : "java.lang.String",
      "description" : "Command to be run prior to the customize method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "defaultValue" : { },
      "reconfigurable" : false
    }, {
      "name" : "requiredOpenLoginPorts",
      "type" : "java.util.Collection",
      "description" : "The port(s) to be opened, to allow login",
      "defaultValue" : [ 22 ],
      "reconfigurable" : false
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false
    }, {
      "name" : "riak.advancedConfig.templateUrl",
      "type" : "java.lang.String",
      "description" : "URL of Template file (in freemarker format) for the advanced.config file",
      "defaultValue" : "classpath://advanced.config",
      "reconfigurable" : false
    }, {
      "name" : "riak.appConfig.templateUrl",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/app.config",
      "reconfigurable" : false
    }, {
      "name" : "riak.max.open.files",
      "type" : "java.lang.Integer",
      "description" : "Number of the open files required by Riak",
      "defaultValue" : 65536,
      "reconfigurable" : false
    }, {
      "name" : "riak.networking.optimize",
      "type" : "java.lang.Boolean",
      "description" : "Optimize host networking when running in a VM",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "riak.os",
      "type" : "java.lang.Enum",
      "description" : "The OS to request. Default is to auto-detect based on the download url and to ensure IP-tables and firewalls do not block Riak. Use 'none' to disable inferencing and firewall reconfiguration.",
      "defaultValue" : "AUTODETECT",
      "reconfigurable" : false,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "UBUNTU_14_04",
        "description" : "UBUNTU_14_04"
      }, {
        "value" : "UBUNTU_12_04",
        "description" : "UBUNTU_12_04"
      }, {
        "value" : "CENTOS_7",
        "description" : "CENTOS_7"
      }, {
        "value" : "CENTOS_6",
        "description" : "CENTOS_6"
      }, {
        "value" : "RHEL_7",
        "description" : "RHEL_7"
      }, {
        "value" : "RHEL_6",
        "description" : "RHEL_6"
      }, {
        "value" : "DEBIAN_7",
        "description" : "DEBIAN_7"
      }, {
        "value" : "DEBIAN_6",
        "description" : "DEBIAN_6"
      }, {
        "value" : "MAC",
        "description" : "MAC"
      } ]
    }, {
      "name" : "riak.pbPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Riak Protocol Buffers Port",
      "defaultValue" : "8087-65535",
      "reconfigurable" : false
    }, {
      "name" : "riak.replication.cluster.manager.port",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Cluster Manager Port",
      "defaultValue" : "9080-65535",
      "reconfigurable" : false
    }, {
      "name" : "riak.riakConf.additionalContent",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for setting up additional settings in the riak.conf file",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "riak.riakConf.templateUrl.linux",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/riak.conf",
      "reconfigurable" : false
    }, {
      "name" : "riak.riakConf.templateUrl.mac",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/riak-mac.conf",
      "reconfigurable" : false
    }, {
      "name" : "riak.search",
      "type" : "java.lang.Boolean",
      "description" : "Deploy Solr and configure Riak to use it",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "riak.vmArgs.templateUrl",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the vm.args config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/vm.args",
      "reconfigurable" : false
    }, {
      "name" : "riak.webPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Riak Web Port",
      "defaultValue" : "8098-65535",
      "reconfigurable" : false
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "reconfigurable" : false
    }, {
      "name" : "search.solr.jmx_port",
      "type" : "java.lang.Integer",
      "description" : "Solr port",
      "defaultValue" : 8985,
      "reconfigurable" : false
    }, {
      "name" : "search.solr.port",
      "type" : "java.lang.Integer",
      "description" : "Solr port",
      "defaultValue" : 8983,
      "reconfigurable" : false
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "description" : "Map of environment variables to pass to the runtime shell",
      "defaultValue" : { },
      "reconfigurable" : false
    }, {
      "name" : "softwareProcess.lifecycleTasks",
      "type" : "org.apache.brooklyn.entity.software.base.SoftwareProcessDriverLifecycleEffectorTasks",
      "description" : "An object that handles lifecycle of an entity's associated machine.",
      "defaultValue" : "org.apache.brooklyn.entity.software.base.SoftwareProcessDriverLifecycleEffectorTasks@47e7cecf",
      "reconfigurable" : false
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "org.apache.brooklyn.util.time.Duration",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "defaultValue" : "10s",
      "reconfigurable" : false
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false
    }, {
      "name" : "start.timeout",
      "type" : "org.apache.brooklyn.util.time.Duration",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "defaultValue" : "2m",
      "reconfigurable" : false
    }, {
      "name" : "stopIptables",
      "type" : "java.lang.Boolean",
      "description" : "Whether to stop iptables entirely; if true then ssh in to stop the iptables service, as part of machine provisioning",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false
    }, {
      "name" : "templates.preinstall",
      "type" : "java.util.Map",
      "description" : "Mapping of templates, to be filled in and copied before pre-install, to destination name relative to installDir",
      "reconfigurable" : false
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "epmdListenerPort",
      "type" : "java.lang.Integer",
      "description" : "Erlang Port Mapper Daemon Listener Port",
      "links" : { }
    }, {
      "name" : "erlangPortRangeEnd",
      "type" : "java.lang.Integer",
      "description" : "Erlang Port Range End",
      "links" : { }
    }, {
      "name" : "erlangPortRangeStart",
      "type" : "java.lang.Integer",
      "description" : "Erlang Port Range Start",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "handoffListenerPort",
      "type" : "java.lang.Integer",
      "description" : "Handoff Listener Port",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "main.uri",
      "type" : "java.net.URI",
      "description" : "Main URI for contacting the service/endpoint offered by this entity",
      "links" : { }
    }, {
      "name" : "riak.consistent_get_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Strongly consistent read latency",
      "links" : { }
    }, {
      "name" : "riak.consistent_put_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Strongly consistent write latency",
      "links" : { }
    }, {
      "name" : "riak.coord.redirs.total",
      "type" : "java.lang.Integer",
      "description" : "riak.coord.redirs.total",
      "links" : { }
    }, {
      "name" : "riak.install.onPath",
      "type" : "java.lang.Boolean",
      "description" : "Flag to indicate whether Riak is available on the PATH",
      "links" : { }
    }, {
      "name" : "riak.install.package",
      "type" : "java.lang.Boolean",
      "description" : "Flag to indicate whether Riak was installed using an OS package",
      "links" : { }
    }, {
      "name" : "riak.memory.processes.used",
      "type" : "java.lang.Integer",
      "description" : "riak.memory.processes.used",
      "links" : { }
    }, {
      "name" : "riak.node",
      "type" : "java.lang.String",
      "description" : "Returns the riak node name as defined in vm.args",
      "links" : { }
    }, {
      "name" : "riak.node.gets",
      "type" : "java.lang.Integer",
      "description" : "Gets in the last minute",
      "links" : { }
    }, {
      "name" : "riak.node.gets.total",
      "type" : "java.lang.Integer",
      "description" : "Total gets since node started",
      "links" : { }
    }, {
      "name" : "riak.node.ops",
      "type" : "java.lang.Integer",
      "description" : "Sum of node gets and puts in the last minute",
      "links" : { }
    }, {
      "name" : "riak.node.ops.total",
      "type" : "java.lang.Integer",
      "description" : "Sum of node gets and puts since the node started",
      "links" : { }
    }, {
      "name" : "riak.node.puts",
      "type" : "java.lang.Integer",
      "description" : "Puts in the last minute",
      "links" : { }
    }, {
      "name" : "riak.node.puts.total",
      "type" : "java.lang.Integer",
      "description" : "Total puts since node started",
      "links" : { }
    }, {
      "name" : "riak.node.riakNodeHasJoinedCluster",
      "type" : "java.lang.Boolean",
      "description" : "Flag to indicate whether the Riak node has joined a cluster member",
      "links" : { }
    }, {
      "name" : "riak.node_get_fsm_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time between reception of client read request and subsequent response to client",
      "links" : { }
    }, {
      "name" : "riak.node_put_fsm_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time between reception of client write request and subsequent response to client",
      "links" : { }
    }, {
      "name" : "riak.object_counter_merge_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time it takes to perform an Update Counter operation",
      "links" : { }
    }, {
      "name" : "riak.object_map_merge_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time it takes to perform an Update Map operation",
      "links" : { }
    }, {
      "name" : "riak.object_set_merge_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time it takes to perform an Update Set operation",
      "links" : { }
    }, {
      "name" : "riak.pbPort",
      "type" : "java.lang.Integer",
      "description" : "Riak Protocol Buffers Port",
      "links" : { }
    }, {
      "name" : "riak.pbc.active",
      "type" : "java.lang.Integer",
      "description" : "riak.pbc.active",
      "links" : { }
    }, {
      "name" : "riak.pbc.connects",
      "type" : "java.lang.Integer",
      "description" : "riak.pbc.connects",
      "links" : { }
    }, {
      "name" : "riak.read.repairs.total",
      "type" : "java.lang.Integer",
      "description" : "riak.read.repairs.total",
      "links" : { }
    }, {
      "name" : "riak.replication.cluster.manager.port",
      "type" : "java.lang.Integer",
      "description" : "Cluster Manager Port",
      "links" : { }
    }, {
      "name" : "riak.sys.process.count",
      "type" : "java.lang.Integer",
      "description" : "riak.sys.process.count",
      "links" : { }
    }, {
      "name" : "riak.vnode.gets",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.gets",
      "links" : { }
    }, {
      "name" : "riak.vnode.gets.total",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.gets.total",
      "links" : { }
    }, {
      "name" : "riak.vnode.puts",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.puts",
      "links" : { }
    }, {
      "name" : "riak.vnode.puts.total",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.puts.total",
      "links" : { }
    }, {
      "name" : "riak.webPort",
      "type" : "java.lang.Integer",
      "description" : "Riak Web Port",
      "links" : { }
    }, {
      "name" : "ring.members",
      "type" : "java.util.List",
      "description" : "all the riak nodes in the ring",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "service.state.expected",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.Lifecycle$Transition",
      "description" : "Last controlled change to service state, indicating what the expected state should be",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "org.apache.brooklyn.api.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "bucketTypeActivate",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Activate a bucket type"
    }, {
      "name" : "bucketTypeCreate",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      }, {
        "name" : "bucketTypeProperties",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Create or modify a bucket type before activation"
    }, {
      "name" : "bucketTypeList",
      "returnType" : "java.util.List",
      "parameters" : [ ],
      "description" : "List all currently available bucket types and their activation status"
    }, {
      "name" : "bucketTypeStatus",
      "returnType" : "java.util.List",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Display the status and properties of a specific bucket type"
    }, {
      "name" : "bucketTypeUpdate",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      }, {
        "name" : "bucketTypeProperties",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Update a bucket type after activation"
    }, {
      "name" : "joinCluster",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "nodeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Join the Riak cluster on the given node"
    }, {
      "name" : "leaveCluster",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Leave the Riak cluster"
    }, {
      "name" : "populateServiceNotUpDiagnostics",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Populates the attribute service.notUp.diagnostics, with any available health indicators"
    }, {
      "name" : "recoverFailedNode",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "nodeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Recover and join the Riak cluster on the given node"
    }, {
      "name" : "removeNode",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "nodeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Remove the given node from the Riak cluster"
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity"
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity"
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity"
    } ]
  }, {
    "type" : "io.cloudsoft.basho.RiakEnterpriseNodeImpl",
    "defaultVersion" : "2.0.5",
    "name" : "io.cloudsoft.basho.RiakEnterpriseNodeImpl",
    "description" : "",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "description" : "Controls behaviour when starting Startable children as part of this entity's lifecycle.",
      "defaultValue" : "NONE",
      "reconfigurable" : false,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ]
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false
    }, {
      "name" : "dontRequireTtyForSudo",
      "type" : "java.lang.Boolean",
      "description" : "Whether to explicitly set /etc/sudoers, so don't need tty (will leave unchanged if 'false'); some machines require a tty for sudo; brooklyn by default does not use a tty (so that it can get separate error+stdout streams); you can enable a tty as an option to every ssh command, or you can do it once and modify the machine so that a tty is not subsequently required.",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false
    }, {
      "name" : "epmdListenerPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Erlang Port Mapper Daemon Listener Port",
      "defaultValue" : "4369",
      "reconfigurable" : false
    }, {
      "name" : "erlangPortRangeEnd",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Erlang Port Range End",
      "defaultValue" : "7999-65535",
      "reconfigurable" : false
    }, {
      "name" : "erlangPortRangeStart",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Erlang Port Range Start",
      "defaultValue" : "6000-65535",
      "reconfigurable" : false
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false
    }, {
      "name" : "files.preinstall",
      "type" : "java.util.Map",
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false
    }, {
      "name" : "handoffListenerPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Handoff Listener Port",
      "defaultValue" : "8099-65535",
      "reconfigurable" : false
    }, {
      "name" : "httpMonitoring.enabled",
      "type" : "java.lang.Boolean",
      "description" : "HTTP(S) monitoring enabled",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "inboundPorts.autoInfer",
      "type" : "java.lang.Boolean",
      "description" : "If set to false turns off the opening of ports based on naming convention, and also those that are of type PortRange in Java entities",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "inboundPorts.configRegex",
      "type" : "java.lang.String",
      "description" : "Regex governing the opening of ports based on config names",
      "defaultValue" : ".*\\.port",
      "reconfigurable" : false
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "reconfigurable" : false
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "description" : "Version to install (Default 2.0.5)",
      "defaultValue" : "2.0.5",
      "reconfigurable" : false
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "description" : "Java command line options",
      "defaultValue" : [ ],
      "reconfigurable" : false
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "description" : "Java command line system properties",
      "defaultValue" : { },
      "reconfigurable" : false
    }, {
      "name" : "java.version.required",
      "type" : "java.lang.String",
      "description" : "Java version required",
      "defaultValue" : "1.7",
      "reconfigurable" : false
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false
    }, {
      "name" : "metrics.usage.retrieve",
      "type" : "java.lang.Boolean",
      "description" : "Whether to retrieve the usage (e.g. performance) metrics",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "openIptables",
      "type" : "java.lang.Boolean",
      "description" : "Whether to open the INBOUND_PORTS via iptables rules; if true then ssh in to run iptables commands, as part of machine provisioning",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "post.customize.command",
      "type" : "java.lang.String",
      "description" : "Command to be run after the customize method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "pre.customize.command",
      "type" : "java.lang.String",
      "description" : "Command to be run prior to the customize method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "defaultValue" : { },
      "reconfigurable" : false
    }, {
      "name" : "requiredOpenLoginPorts",
      "type" : "java.util.Collection",
      "description" : "The port(s) to be opened, to allow login",
      "defaultValue" : [ 22 ],
      "reconfigurable" : false
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false
    }, {
      "name" : "riak.advancedConfig.templateUrl",
      "type" : "java.lang.String",
      "description" : "URL of Template file (in freemarker format) for the advanced.config file",
      "defaultValue" : "classpath://advanced.config",
      "reconfigurable" : false
    }, {
      "name" : "riak.appConfig.templateUrl",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/app.config",
      "reconfigurable" : false
    }, {
      "name" : "riak.max.open.files",
      "type" : "java.lang.Integer",
      "description" : "Number of the open files required by Riak",
      "defaultValue" : 65536,
      "reconfigurable" : false
    }, {
      "name" : "riak.networking.optimize",
      "type" : "java.lang.Boolean",
      "description" : "Optimize host networking when running in a VM",
      "defaultValue" : true,
      "reconfigurable" : false
    }, {
      "name" : "riak.os",
      "type" : "java.lang.Enum",
      "description" : "The OS to request. Default is to auto-detect based on the download url and to ensure IP-tables and firewalls do not block Riak. Use 'none' to disable inferencing and firewall reconfiguration.",
      "defaultValue" : "AUTODETECT",
      "reconfigurable" : false,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "UBUNTU_14_04",
        "description" : "UBUNTU_14_04"
      }, {
        "value" : "UBUNTU_12_04",
        "description" : "UBUNTU_12_04"
      }, {
        "value" : "CENTOS_7",
        "description" : "CENTOS_7"
      }, {
        "value" : "CENTOS_6",
        "description" : "CENTOS_6"
      }, {
        "value" : "RHEL_7",
        "description" : "RHEL_7"
      }, {
        "value" : "RHEL_6",
        "description" : "RHEL_6"
      }, {
        "value" : "DEBIAN_7",
        "description" : "DEBIAN_7"
      }, {
        "value" : "DEBIAN_6",
        "description" : "DEBIAN_6"
      }, {
        "value" : "MAC",
        "description" : "MAC"
      } ]
    }, {
      "name" : "riak.pbPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Riak Protocol Buffers Port",
      "defaultValue" : "8087-65535",
      "reconfigurable" : false
    }, {
      "name" : "riak.replication.cluster.manager.port",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Cluster Manager Port",
      "defaultValue" : "9080-65535",
      "reconfigurable" : false
    }, {
      "name" : "riak.riakConf.additionalContent",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for setting up additional settings in the riak.conf file",
      "defaultValue" : "",
      "reconfigurable" : false
    }, {
      "name" : "riak.riakConf.templateUrl.linux",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/riak.conf",
      "reconfigurable" : false
    }, {
      "name" : "riak.riakConf.templateUrl.mac",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/riak-mac.conf",
      "reconfigurable" : false
    }, {
      "name" : "riak.search",
      "type" : "java.lang.Boolean",
      "description" : "Deploy Solr and configure Riak to use it",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "riak.vmArgs.templateUrl",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the vm.args config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/vm.args",
      "reconfigurable" : false
    }, {
      "name" : "riak.webPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Riak Web Port",
      "defaultValue" : "8098-65535",
      "reconfigurable" : false
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "reconfigurable" : false
    }, {
      "name" : "search.solr.jmx_port",
      "type" : "java.lang.Integer",
      "description" : "Solr port",
      "defaultValue" : 8985,
      "reconfigurable" : false
    }, {
      "name" : "search.solr.port",
      "type" : "java.lang.Integer",
      "description" : "Solr port",
      "defaultValue" : 8983,
      "reconfigurable" : false
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "description" : "Map of environment variables to pass to the runtime shell",
      "defaultValue" : { },
      "reconfigurable" : false
    }, {
      "name" : "softwareProcess.lifecycleTasks",
      "type" : "org.apache.brooklyn.entity.software.base.SoftwareProcessDriverLifecycleEffectorTasks",
      "description" : "An object that handles lifecycle of an entity's associated machine.",
      "defaultValue" : "org.apache.brooklyn.entity.software.base.SoftwareProcessDriverLifecycleEffectorTasks@47e7cecf",
      "reconfigurable" : false
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "org.apache.brooklyn.util.time.Duration",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "defaultValue" : "10s",
      "reconfigurable" : false
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false
    }, {
      "name" : "start.timeout",
      "type" : "org.apache.brooklyn.util.time.Duration",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "defaultValue" : "2m",
      "reconfigurable" : false
    }, {
      "name" : "stopIptables",
      "type" : "java.lang.Boolean",
      "description" : "Whether to stop iptables entirely; if true then ssh in to stop the iptables service, as part of machine provisioning",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false
    }, {
      "name" : "templates.preinstall",
      "type" : "java.util.Map",
      "description" : "Mapping of templates, to be filled in and copied before pre-install, to destination name relative to installDir",
      "reconfigurable" : false
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "entity.children.added",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Child dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.children.removed",
      "type" : "org.apache.brooklyn.api.entity.Entity",
      "description" : "Child dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.config_key.added",
      "type" : "org.apache.brooklyn.config.ConfigKey",
      "description" : "ConfigKey dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.config_key.removed",
      "type" : "org.apache.brooklyn.config.ConfigKey",
      "description" : "ConfigKey dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.effector.added",
      "type" : "java.lang.String",
      "description" : "Effector dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.effector.changed",
      "type" : "java.lang.String",
      "description" : "Effector dynamically changed on entity",
      "links" : { }
    }, {
      "name" : "entity.effector.removed",
      "type" : "java.lang.String",
      "description" : "Effector dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.group.added",
      "type" : "org.apache.brooklyn.api.entity.Group",
      "description" : "Group dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.group.removed",
      "type" : "org.apache.brooklyn.api.entity.Group",
      "description" : "Group dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.location.added",
      "type" : "org.apache.brooklyn.api.location.Location",
      "description" : "Location dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.location.removed",
      "type" : "org.apache.brooklyn.api.location.Location",
      "description" : "Location dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.policy.added",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.PolicyDescriptor",
      "description" : "Policy dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.policy.removed",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.PolicyDescriptor",
      "description" : "Policy dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "entity.sensor.added",
      "type" : "org.apache.brooklyn.api.sensor.Sensor",
      "description" : "Sensor dynamically added to entity",
      "links" : { }
    }, {
      "name" : "entity.sensor.removed",
      "type" : "org.apache.brooklyn.api.sensor.Sensor",
      "description" : "Sensor dynamically removed from entity",
      "links" : { }
    }, {
      "name" : "epmdListenerPort",
      "type" : "java.lang.Integer",
      "description" : "Erlang Port Mapper Daemon Listener Port",
      "links" : { }
    }, {
      "name" : "erlangPortRangeEnd",
      "type" : "java.lang.Integer",
      "description" : "Erlang Port Range End",
      "links" : { }
    }, {
      "name" : "erlangPortRangeStart",
      "type" : "java.lang.Integer",
      "description" : "Erlang Port Range Start",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "handoffListenerPort",
      "type" : "java.lang.Integer",
      "description" : "Handoff Listener Port",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "main.uri",
      "type" : "java.net.URI",
      "description" : "Main URI for contacting the service/endpoint offered by this entity",
      "links" : { }
    }, {
      "name" : "riak.consistent_get_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Strongly consistent read latency",
      "links" : { }
    }, {
      "name" : "riak.consistent_put_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Strongly consistent write latency",
      "links" : { }
    }, {
      "name" : "riak.coord.redirs.total",
      "type" : "java.lang.Integer",
      "description" : "riak.coord.redirs.total",
      "links" : { }
    }, {
      "name" : "riak.install.onPath",
      "type" : "java.lang.Boolean",
      "description" : "Flag to indicate whether Riak is available on the PATH",
      "links" : { }
    }, {
      "name" : "riak.install.package",
      "type" : "java.lang.Boolean",
      "description" : "Flag to indicate whether Riak was installed using an OS package",
      "links" : { }
    }, {
      "name" : "riak.memory.processes.used",
      "type" : "java.lang.Integer",
      "description" : "riak.memory.processes.used",
      "links" : { }
    }, {
      "name" : "riak.node",
      "type" : "java.lang.String",
      "description" : "Returns the riak node name as defined in vm.args",
      "links" : { }
    }, {
      "name" : "riak.node.gets",
      "type" : "java.lang.Integer",
      "description" : "Gets in the last minute",
      "links" : { }
    }, {
      "name" : "riak.node.gets.total",
      "type" : "java.lang.Integer",
      "description" : "Total gets since node started",
      "links" : { }
    }, {
      "name" : "riak.node.ops",
      "type" : "java.lang.Integer",
      "description" : "Sum of node gets and puts in the last minute",
      "links" : { }
    }, {
      "name" : "riak.node.ops.total",
      "type" : "java.lang.Integer",
      "description" : "Sum of node gets and puts since the node started",
      "links" : { }
    }, {
      "name" : "riak.node.puts",
      "type" : "java.lang.Integer",
      "description" : "Puts in the last minute",
      "links" : { }
    }, {
      "name" : "riak.node.puts.total",
      "type" : "java.lang.Integer",
      "description" : "Total puts since node started",
      "links" : { }
    }, {
      "name" : "riak.node.riakNodeHasJoinedCluster",
      "type" : "java.lang.Boolean",
      "description" : "Flag to indicate whether the Riak node has joined a cluster member",
      "links" : { }
    }, {
      "name" : "riak.node_get_fsm_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time between reception of client read request and subsequent response to client",
      "links" : { }
    }, {
      "name" : "riak.node_put_fsm_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time between reception of client write request and subsequent response to client",
      "links" : { }
    }, {
      "name" : "riak.object_counter_merge_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time it takes to perform an Update Counter operation",
      "links" : { }
    }, {
      "name" : "riak.object_map_merge_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time it takes to perform an Update Map operation",
      "links" : { }
    }, {
      "name" : "riak.object_set_merge_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time it takes to perform an Update Set operation",
      "links" : { }
    }, {
      "name" : "riak.pbPort",
      "type" : "java.lang.Integer",
      "description" : "Riak Protocol Buffers Port",
      "links" : { }
    }, {
      "name" : "riak.pbc.active",
      "type" : "java.lang.Integer",
      "description" : "riak.pbc.active",
      "links" : { }
    }, {
      "name" : "riak.pbc.connects",
      "type" : "java.lang.Integer",
      "description" : "riak.pbc.connects",
      "links" : { }
    }, {
      "name" : "riak.read.repairs.total",
      "type" : "java.lang.Integer",
      "description" : "riak.read.repairs.total",
      "links" : { }
    }, {
      "name" : "riak.replication.cluster.manager.port",
      "type" : "java.lang.Integer",
      "description" : "Cluster Manager Port",
      "links" : { }
    }, {
      "name" : "riak.sys.process.count",
      "type" : "java.lang.Integer",
      "description" : "riak.sys.process.count",
      "links" : { }
    }, {
      "name" : "riak.vnode.gets",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.gets",
      "links" : { }
    }, {
      "name" : "riak.vnode.gets.total",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.gets.total",
      "links" : { }
    }, {
      "name" : "riak.vnode.puts",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.puts",
      "links" : { }
    }, {
      "name" : "riak.vnode.puts.total",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.puts.total",
      "links" : { }
    }, {
      "name" : "riak.webPort",
      "type" : "java.lang.Integer",
      "description" : "Riak Web Port",
      "links" : { }
    }, {
      "name" : "ring.members",
      "type" : "java.util.List",
      "description" : "all the riak nodes in the ring",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "service.state.expected",
      "type" : "org.apache.brooklyn.core.entity.lifecycle.Lifecycle$Transition",
      "description" : "Last controlled change to service state, indicating what the expected state should be",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "org.apache.brooklyn.api.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "bucketTypeActivate",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Activate a bucket type"
    }, {
      "name" : "bucketTypeCreate",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      }, {
        "name" : "bucketTypeProperties",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Create or modify a bucket type before activation"
    }, {
      "name" : "bucketTypeList",
      "returnType" : "java.util.List",
      "parameters" : [ ],
      "description" : "List all currently available bucket types and their activation status"
    }, {
      "name" : "bucketTypeStatus",
      "returnType" : "java.util.List",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Display the status and properties of a specific bucket type"
    }, {
      "name" : "bucketTypeUpdate",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      }, {
        "name" : "bucketTypeProperties",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Update a bucket type after activation"
    }, {
      "name" : "joinCluster",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "nodeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Join the Riak cluster on the given node"
    }, {
      "name" : "leaveCluster",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Leave the Riak cluster"
    }, {
      "name" : "populateServiceNotUpDiagnostics",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Populates the attribute service.notUp.diagnostics, with any available health indicators"
    }, {
      "name" : "recoverFailedNode",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "nodeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Recover and join the Riak cluster on the given node"
    }, {
      "name" : "removeNode",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "nodeName",
        "type" : "java.lang.String",
        "defaultValue" : null
      } ],
      "description" : "Remove the given node from the Riak cluster"
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity"
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity"
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity"
    } ]
  } ],
  "policies" : [ {
    "type" : "io.cloudsoft.basho.RiakEnterpriseFabricImpl$MembershipTrackingPolicy",
    "name" : "io.cloudsoft.basho.RiakEnterpriseFabricImpl$MembershipTrackingPolicy",
    "description" : "",
    "config" : [ {
      "name" : "group",
      "type" : "org.apache.brooklyn.api.entity.Group",
      "description" : "group",
      "reconfigurable" : false
    }, {
      "name" : "notifyOnDuplicates",
      "type" : "java.lang.Boolean",
      "description" : "Whether to notify listeners when a sensor is published with the same value as last time",
      "defaultValue" : false,
      "reconfigurable" : false
    }, {
      "name" : "sensorsToTrack",
      "type" : "java.util.Set",
      "description" : "Sensors of members to be monitored (implicitly adds service-up to this list, but that behaviour may be deleted in a subsequent release!)",
      "defaultValue" : [ ],
      "reconfigurable" : false
    } ]
  } ],
  "enrichers" : [ ],
  "locations" : [ ],
  "locationResolvers" : [ "brooklyn.catalog", "byon", "host", "id", "jclouds", "jcloudsByon", "localhost", "multi", "named", "pool", "portForwardManager", "single" ]
}