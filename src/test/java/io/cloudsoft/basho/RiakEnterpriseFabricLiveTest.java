package io.cloudsoft.basho;

import java.net.URI;
import java.util.List;
import java.util.Map;

import javax.annotation.Nullable;

import org.apache.brooklyn.api.entity.Entity;
import org.apache.brooklyn.api.entity.EntitySpec;
import org.apache.brooklyn.api.location.Location;
import org.apache.brooklyn.api.mgmt.ManagementContext;
import org.apache.brooklyn.core.entity.Attributes;
import org.apache.brooklyn.core.entity.Entities;
import org.apache.brooklyn.core.entity.EntityAsserts;
import org.apache.brooklyn.core.test.entity.LocalManagementContextForTests;
import org.apache.brooklyn.core.test.entity.TestApplication;
import org.apache.brooklyn.entity.group.Cluster;
import org.apache.brooklyn.test.Asserts;
import org.apache.brooklyn.util.http.HttpTool;
import org.apache.brooklyn.util.http.HttpToolResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.google.common.base.Function;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Iterables;

public class RiakEnterpriseFabricLiveTest {
    private static final Logger LOG = LoggerFactory.getLogger(RiakEnterpriseFabricLiveTest.class);
    public static final String RIAK_DOWNLOAD_CODE = "riak.download.code";

    public static class RiakDownloadUrls {
        private final Map<String, String> BY_OS = ImmutableMap.of(
            "centos", getCentosUrl(),
            "ubuntu", getUbuntuUrl()
        );
        public static String getUbuntuUrl() {
            return getUrlFromSystemProperty("riak.download.url.ubuntu", "http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/%s/2.1.3/ubuntu/trusty/riak-ee_2.1.3-1_amd64.deb");
        }
        public static String getCentosUrl() {
            return getUrlFromSystemProperty("riak.download.url.rhelcentos", "http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/%s/2.1.3/rhel/7/riak-ee-2.1.3-1.el7.centos.x86_64.rpm");
        }
        private static String getUrlFromSystemProperty(String property, String template) {
            String url = System.getProperty(property);
            if (url!=null) return url;
            String code = System.getProperty(RIAK_DOWNLOAD_CODE);
            if (code!=null) return String.format(template, code);
            throw new IllegalStateException("Test requires either '"+RIAK_DOWNLOAD_CODE+"' or '"+property+"' set as a system property.");
        }
    }

    protected TestApplication app;
    protected ManagementContext management;

    @BeforeMethod(alwaysRun = true)
    public void setup() throws Exception {
        management = LocalManagementContextForTests.builder(true)
                .useDefaultProperties()
                .build();
        app = TestApplication.Factory.newManagedInstanceForTests(management);
    }

    @AfterMethod(alwaysRun = true)
    public void shutdown() {
        if (management != null) Entities.destroyAll(management);
        management = null;
    }

    @DataProvider(name = "clouds")
    public Object[][] provideCloudOptions() {
        return new Object[][] { // Provider, osFamily, Provider2, osFamily2
                new Object[] {"aws-ec2:eu-west-1", "centos", "aws-ec2:us-west-1", "centos"},
                new Object[] {"softlayer:ams01", "ubuntu", "softlayer:sjc01", "ubuntu"},
                new Object[] {"softlayer:ams01", "ubuntu", "aws-ec2:us-west-1", "centos"}
        };
    }

    @Test(groups = "Live", dataProvider = "clouds")
    protected void testFabric(String provider1, String osFamily1, String provider2, String osFamily2) {
        LOG.info("Testing Riak Enterprise Fabric in {} (on {}) and {} (on {})", new Object[] {provider1, osFamily1, provider2, osFamily2});
        Map<String, String> downloadProperties = ImmutableMap.of(
                "download.url.rhelcentos", new RiakDownloadUrls().BY_OS.get("centos"),
                "download.url.ubuntu", new RiakDownloadUrls().BY_OS.get("ubuntu")
        );
        Location location1 = app.getManagementContext().getLocationRegistry()
                .resolve(provider1, ImmutableMap.of("osFamily", osFamily1, "openIptables", true));
        Location location2 = app.getManagementContext().getLocationRegistry()
                .resolve(provider2, ImmutableMap.of("osFamily", osFamily2, "openIptables", true));
        LOG.debug("Location1: {}", location1);
        LOG.debug("Location2: {}", location2);
        RiakEnterpriseFabric fabric = app.createAndManageChild(EntitySpec.create(RiakEnterpriseFabric.class)
            .configure(Cluster.INITIAL_SIZE, 2)
            .configure(downloadProperties));
        app.start(ImmutableList.of(location1, location2));
        EntityAsserts.assertAttributeEqualsEventually(fabric, Attributes.SERVICE_UP, true);
        Assert.assertEquals(fabric.getMembers().size(), 2);

        List<RiakEnterpriseCluster> clusterList = ImmutableList.copyOf(Iterables.transform(fabric.getMembers(), new Function<Entity, RiakEnterpriseCluster>() {
            @Nullable
            @Override
            public RiakEnterpriseCluster apply(Entity entity) {
                return (RiakEnterpriseCluster) entity;
            }
        }));

        List<RiakEnterpriseNode> nodeList1 = ImmutableList.copyOf(Iterables.transform(clusterList.get(0).getMembers(),
                new Function<Entity, RiakEnterpriseNode>() {
            @Nullable
            @Override
            public RiakEnterpriseNode apply(Entity entity) {
                return (RiakEnterpriseNode)entity;
            }
        }));

        final List<RiakEnterpriseNode> nodeList2 = ImmutableList.copyOf(Iterables.transform(clusterList.get(1).getMembers(),
                new Function<Entity, RiakEnterpriseNode>() {
            @Nullable
            @Override
            public RiakEnterpriseNode apply(Entity entity) {
                return (RiakEnterpriseNode)entity;
            }
        }));

        final String payload = "{foo:bar}";

        String node11HostName = nodeList1.get(0).getAttribute(Attributes.HOSTNAME);
        Integer node11Port = nodeList1.get(0).getAttribute(RiakEnterpriseNode.RIAK_WEB_PORT);
        URI putUri = URI.create(String.format("http://%s:%s/riak/testbucket/testdocument", node11HostName, node11Port));

        HttpToolResponse response = HttpTool.httpPut(HttpTool.httpClientBuilder().build(), putUri,
                ImmutableMap.of("Content-Type", "application/json"), payload.getBytes());
        Assert.assertNotNull(response);

        Asserts.succeedsEventually(new Runnable() {
            @Override
            public void run() {
                Assert.assertEquals(getOutput(nodeList2.get(0)), payload);
                Assert.assertEquals(getOutput(nodeList2.get(1)), payload);
            }
        });
    }

    private String getOutput(RiakEnterpriseNode node) {
        String hostname = node.getAttribute(Attributes.HOSTNAME);
        Integer port = node.getAttribute(RiakEnterpriseNode.RIAK_WEB_PORT);
        URI getUri = URI.create(String.format("http://%s:%s/riak/testbucket/testdocument", hostname, port));
        return HttpTool.httpGet(HttpTool.httpClientBuilder().build(), getUri, ImmutableMap.<String, String>of()).getContentAsString();
    }
}
