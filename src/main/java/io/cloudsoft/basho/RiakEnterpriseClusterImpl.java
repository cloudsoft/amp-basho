package io.cloudsoft.basho;

import brooklyn.entity.Entity;
import brooklyn.entity.nosql.riak.RiakClusterImpl;
import brooklyn.entity.proxying.EntitySpec;
import brooklyn.location.Location;
import com.beust.jcommander.internal.Sets;

import java.util.Collection;
import java.util.Map;
import java.util.Set;

public class RiakEnterpriseClusterImpl extends RiakClusterImpl implements RiakEnterpriseCluster {

    @Override
    public void start(Collection<? extends Location> locations) {
        super.start(locations);
        initializeCluster();
    }

    @Override
    public void updateReplication(Set<RiakEnterpriseCluster> upClusters) {
        Set<RiakEnterpriseCluster> sinks = getAttribute(REPLICATION_SINKS);
        if (sinks == null) {
            sinks = Sets.newLinkedHashSet();
        }
        for (RiakEnterpriseCluster cluster : sinks) {
            if (!upClusters.contains(cluster)) {
                sinks.remove(cluster);
            }
        }

        for (RiakEnterpriseCluster upCluster : upClusters) {
            if (!sinks.contains(upCluster) && !upCluster.equals(this)) {
                getAnyNode().addReplicationSink(upCluster);
                sinks.add(upCluster);
            }
        }

        setAttribute(REPLICATION_SINKS, sinks);
    }

    protected EntitySpec<?> getMemberSpec() {
        return getConfig(MEMBER_SPEC, EntitySpec.create(RiakEnterpriseNode.class));

    }

    private void initializeCluster() {
        if (Boolean.FALSE.equals(getAttribute(CLUSTER_INITIALIZED))) {
            return;
        }
        Map<Entity, String> nodes = getAttribute(RIAK_CLUSTER_NODES);
        if (nodes.keySet().size() == 0) {
            return;
        }
        RiakEnterpriseNode node = (RiakEnterpriseNode) nodes.keySet().iterator().next();
        String name = getConfig(CLUSTER_NAME);
        node.initializeCluster(name);
        setAttribute(CLUSTER_NAME, name);
        setAttribute(CLUSTER_INITIALIZED, true);
    }

    private RiakEnterpriseNode getAnyNode() {
        return (RiakEnterpriseNode) getAttribute(RIAK_CLUSTER_NODES).keySet().iterator().next();
    }
}
