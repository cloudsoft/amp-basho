package io.cloudsoft.basho;

import brooklyn.entity.Entity;
import brooklyn.entity.basic.EntityPredicates;
import brooklyn.entity.nosql.riak.RiakClusterImpl;
import brooklyn.entity.proxying.EntitySpec;
import brooklyn.location.Location;
import com.beust.jcommander.internal.Sets;
import com.google.common.base.Optional;
import com.google.common.collect.Iterables;

import java.util.Collection;
import java.util.Set;

public class RiakEnterpriseClusterImpl extends RiakClusterImpl implements RiakEnterpriseCluster {

    @Override
    public void start(Collection<? extends Location> locations) {
        super.start(locations);
        initializeReplication();
    }

    @Override
    public void updateReplication(Set<RiakEnterpriseCluster> upClusters) {
        Optional<RiakEnterpriseNode> node = getAnyNode();
        if (!node.isPresent()) {
            throw new IllegalStateException("Cannot update replication sinks as there are no nodes available");
        }
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
                node.get().addReplicationSink(upCluster);
                sinks.add(upCluster);
            }
        }

        setAttribute(REPLICATION_SINKS, sinks);
    }

    @Override
    public void triggerFullSync(String clusterName) {
        Optional<RiakEnterpriseNode> anyNode = getAnyNode();
        if (!anyNode.isPresent()) {
            throw new IllegalStateException("Cannot initialize replication sinks as there are no nodes available");
        }

        anyNode.get().triggerFullSync(clusterName);
    }

    protected EntitySpec<?> getMemberSpec() {
        return getConfig(MEMBER_SPEC, EntitySpec.create(RiakEnterpriseNode.class));
    }

    private void initializeReplication() {
        String name = getConfig(CLUSTER_NAME);
        if(name != null) {
            Optional<RiakEnterpriseNode> anyNode = getAnyNode();

            if (!anyNode.isPresent()) {
                throw new IllegalStateException("Cannot initialize replication sinks as there are no nodes available");
            }

            anyNode.get().initializeReplication(name);
            setAttribute(CLUSTER_NAME, name);
            setAttribute(REPLICATION_INITIALIZED, true);
        }
    }

    private Optional<RiakEnterpriseNode> getAnyNode() {
        if (Boolean.FALSE.equals(getAttribute(REPLICATION_INITIALIZED))) {
            return Optional.absent();
        }
        Iterable<Entity> upEntities = Iterables.filter(getMembers(), EntityPredicates.attributeEqualTo(SERVICE_UP, Boolean.TRUE));
        if (upEntities == null || !upEntities.iterator().hasNext()) {
            return Optional.absent();
        }
        return Optional.of((RiakEnterpriseNode)upEntities.iterator().next());
    }
}
