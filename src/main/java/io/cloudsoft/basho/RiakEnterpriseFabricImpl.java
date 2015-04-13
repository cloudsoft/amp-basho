package io.cloudsoft.basho;

import brooklyn.enricher.Enrichers;
import brooklyn.entity.Entity;
import brooklyn.entity.basic.EntityPredicates;
import brooklyn.entity.group.AbstractMembershipTrackingPolicy;
import brooklyn.entity.group.DynamicFabricImpl;
import brooklyn.entity.nosql.riak.RiakCluster;
import brooklyn.entity.proxying.EntitySpec;
import brooklyn.event.SensorEvent;
import brooklyn.event.SensorEventListener;
import brooklyn.location.Location;
import brooklyn.policy.PolicySpec;
import brooklyn.util.text.StringFunctions;

import com.google.common.base.Function;
import com.google.common.base.Optional;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.ImmutableSet;
import com.google.common.collect.Iterables;
import com.google.common.collect.Sets;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.Nullable;

import java.util.Collection;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;

public class RiakEnterpriseFabricImpl extends DynamicFabricImpl implements RiakEnterpriseFabric {

    private static final Logger LOG = LoggerFactory.getLogger(RiakEnterpriseFabricImpl.class);
    // TODO: Rebind...
    private final AtomicInteger clusterCounter = new AtomicInteger(1); // Used to provide a unique name for the clusters
    private final Object mutex = new Object[0];

    public RiakEnterpriseFabricImpl() {
        super();
    }

    @Override
    public void init() {
        super.init();
        addPolicy(PolicySpec.create(MembershipTrackingPolicy.class)
                .displayName("Riak Fabric Tracker")
                .configure("sensorsToTrack", ImmutableSet.of(RiakEnterpriseCluster.REPLICATION_INITIALIZED))
                .configure("group", this));
        addEnricher(Enrichers.builder().aggregating(RiakCluster.NODE_LIST)
            .fromMembers().excludingBlank()
            .publishing(RiakCluster.NODE_LIST).computing(StringFunctions.joiner(","))
            .build());
    }

    public static class MembershipTrackingPolicy extends AbstractMembershipTrackingPolicy {
        @Override
        protected void onEntityChange(Entity member) {
            if (LOG.isDebugEnabled()) {
                LOG.debug("Location {} updated in Fabric {}", member, entity);
            }
            ((RiakEnterpriseFabricImpl)entity).update();
        }
        @Override
        protected void onEntityAdded(Entity member) {
            if (LOG.isDebugEnabled()) {
                LOG.debug("Location {} added to Fabric {}", member, entity);
            }
            ((RiakEnterpriseFabricImpl)entity).update();
        }

        @Override
        protected void onEntityRemoved(Entity member) {
            if (LOG.isDebugEnabled()) {
                LOG.debug("Location {} removed from Fabric {}", member, entity);
            }
            ((RiakEnterpriseFabricImpl)entity).update();
        }
    }

    @Override
    protected EntitySpec<?> getMemberSpec() {
        EntitySpec<?> custom = getConfig(MEMBER_SPEC);
        if (custom == null) {
            return EntitySpec.create(RiakEnterpriseCluster.class);
        } else {
            return EntitySpec.create(custom);
        }
    }

    @Override
    protected Entity createCluster(Location location, Map flags) {
        Function<Location, String> clusterNamer = getConfig(CLUSTER_NAMER);
        String clusterName;
        if (clusterNamer == null) {
            clusterName = "Cluster" + clusterCounter.getAndIncrement();
        } else {
            clusterName = clusterNamer.apply(location);
        }
        flags = ImmutableMap.builder()
                .putAll(flags)
                .put(RiakEnterpriseCluster.CLUSTER_NAME, clusterName)
                .build();
        return super.createCluster(location, flags);
    }

    @Override
    public void start(Collection<? extends Location> locations) {
        super.start(locations);

        connectEnrichers();

        update();
    }

    protected void connectEnrichers() {
        subscribeToMembers(this, SERVICE_UP, new SensorEventListener<Boolean>() {
            @Override
            public void onEvent(SensorEvent<Boolean> event) {
                setAttribute(SERVICE_UP, calculateServiceUp());
            }
        });
    }

    private Boolean calculateServiceUp() {
        Optional<Entity> upNode = Iterables.tryFind(getMembers(), EntityPredicates.attributeEqualTo(SERVICE_UP, Boolean.TRUE));
        return upNode.isPresent();
    }

    private void update() {
        synchronized (mutex) {
            Iterable<Entity> upEntities = Iterables.filter(getMembers(), EntityPredicates.attributeEqualTo(RiakEnterpriseCluster.REPLICATION_INITIALIZED, Boolean.TRUE));
            Set<RiakEnterpriseCluster> upClusters = Sets.newLinkedHashSet(Iterables.transform(upEntities, new Function<Entity, RiakEnterpriseCluster>() {
                @Nullable
                @Override
                public RiakEnterpriseCluster apply(Entity entity) {
                    if (!(entity instanceof RiakEnterpriseCluster)) {
                        throw new IllegalStateException("Expected members to be RiakEnterpriseCluster, found " + entity);
                    }
                    return (RiakEnterpriseCluster)entity;
                }
            }));

            for (RiakEnterpriseCluster entity : upClusters) {
                entity.updateReplication(upClusters);
            }
        }
    }

}
