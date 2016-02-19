package io.cloudsoft.basho;

import org.apache.brooklyn.api.entity.EntitySpec;
import org.apache.brooklyn.api.location.LocationSpec;
import org.apache.brooklyn.core.entity.trait.Startable;
import org.apache.brooklyn.core.test.BrooklynAppUnitTestSupport;
import org.apache.brooklyn.location.jclouds.BailOutJcloudsLocation;
import org.apache.brooklyn.location.jclouds.JcloudsLocationConfig;
import org.apache.brooklyn.test.Asserts;
import org.apache.brooklyn.util.collections.MutableList;
import org.apache.brooklyn.util.core.config.ConfigBag;
import org.jclouds.compute.domain.OsFamily;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.google.common.base.Function;
import com.google.common.base.Preconditions;

public class RiakOsInferenceTest extends BrooklynAppUnitTestSupport {

    @Test
    public void testErrorIfNoDownload() {
        try {
            mgmt.getEntityManager().createEntity(EntitySpec.create(RiakEnterpriseNode.class));
            Asserts.shouldHaveFailedPreviously();
        } catch (Exception e) {
            Asserts.expectedFailureContainsIgnoreCase(e, " enterprise ", "download.url");
        }
    }

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
    
    
    private static final String DOWNLOAD_URL_SAMPLE_RHELCENTOS_7 = "http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/SAMPLE/2.1.3/rhel/7/riak-ee-2.1.3-1.el7.centos.x86_64.rpm";
    private static final String DOWNLOAD_URL_SAMPLE_UBUNTU_14 = "http://s3.amazonaws.com/private.downloads.basho.com/riak_ee/SAMPLE/2.1.3/ubuntu/trusty/riak-ee_2.1.3-1_amd64.deb";
    
    @Test
    public void testInfersCentos7() {
        RiakEnterpriseNode r = mgmt.getEntityManager().createEntity(EntitySpec.create(RiakEnterpriseNode.class)
            .configure(RiakEnterpriseNode.DOWNLOAD_URL, DOWNLOAD_URL_SAMPLE_RHELCENTOS_7));
        start(r);
        
        // centos dl link should be set
        Assert.assertEquals(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS.getAsSensorValue(r), DOWNLOAD_URL_SAMPLE_RHELCENTOS_7);
        // ubuntu no
        assertMissing(RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU.getAsSensorValue(r));
        // centos is preferred over rhel
        Assert.assertEquals(lastConfig.get(JcloudsLocationConfig.OS_FAMILY), OsFamily.CENTOS);
        
        assertLastCloudConfigAcceptsVersions("7", "rhel v 7", "rh-v:7.1", "v/7/x");
        assertLastCloudConfigDoesNotAcceptVersions("6", "71", "v71", "rh-v/6/");
    }
    
    @Test
    public void testInfersUbuntu14() {
        RiakEnterpriseNode r = mgmt.getEntityManager().createEntity(EntitySpec.create(RiakEnterpriseNode.class)
            .configure(RiakEnterpriseNode.DOWNLOAD_URL, DOWNLOAD_URL_SAMPLE_UBUNTU_14));
        start(r);
        
        Assert.assertEquals(RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU.getAsSensorValue(r), DOWNLOAD_URL_SAMPLE_UBUNTU_14);
        assertMissing(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS.getAsSensorValue(r));
        Assert.assertEquals(lastConfig.get(JcloudsLocationConfig.OS_FAMILY), OsFamily.UBUNTU);
        
        assertLastCloudConfigAcceptsVersions("14.04", "ubu 14_04", "/14.04/", "/trusty/");
        assertLastCloudConfigDoesNotAcceptVersions("14", "precise", "v14-041", "rh-v/12.04/");
    }
    
    @Test
    public void testInfersUbuntuFromDeb() {
        RiakEnterpriseNode r = mgmt.getEntityManager().createEntity(EntitySpec.create(RiakEnterpriseNode.class)
            .configure(RiakEnterpriseNode.DOWNLOAD_URL, "riak.deb"));
        start(r);
        
        Assert.assertEquals(RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU.getAsSensorValue(r), "riak.deb");
        assertMissing(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS.getAsSensorValue(r));
        Assert.assertEquals(lastConfig.get(JcloudsLocationConfig.OS_FAMILY), OsFamily.UBUNTU);
        
        assertLastCloudConfigNoVersionRegex();
    }
    
    @Test
    public void testInfersCentosFromRpm() {
        RiakEnterpriseNode r = mgmt.getEntityManager().createEntity(EntitySpec.create(RiakEnterpriseNode.class)
            .configure(RiakEnterpriseNode.DOWNLOAD_URL, "riak.rpm"));
        start(r);
        
        Assert.assertEquals(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS.getAsSensorValue(r), "riak.rpm");
        assertMissing(RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU.getAsSensorValue(r));
        Assert.assertEquals(lastConfig.get(JcloudsLocationConfig.OS_FAMILY), OsFamily.CENTOS);
        
        assertLastCloudConfigNoVersionRegex();
    }
    
    @Test
    public void testAllowsRhelCentos() {
        RiakEnterpriseNode r = mgmt.getEntityManager().createEntity(EntitySpec.create(RiakEnterpriseNode.class)
            .configure(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS, "riak.rpm"));
        start(r);
        
        Assert.assertEquals(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS.getAsSensorValue(r), "riak.rpm");
        assertMissing(RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU.getAsSensorValue(r));
        Assert.assertEquals(lastConfig.get(JcloudsLocationConfig.OS_FAMILY), OsFamily.CENTOS);
        
        assertLastCloudConfigNoVersionRegex();
    }
    
    @Test
    public void testAllowsRhelCentosInfers7() {
        RiakEnterpriseNode r = mgmt.getEntityManager().createEntity(EntitySpec.create(RiakEnterpriseNode.class)
            .configure(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS, DOWNLOAD_URL_SAMPLE_RHELCENTOS_7));
        start(r);
        
        Assert.assertEquals(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS.getAsSensorValue(r), DOWNLOAD_URL_SAMPLE_RHELCENTOS_7);
        assertMissing(RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU.getAsSensorValue(r));
        Assert.assertEquals(lastConfig.get(JcloudsLocationConfig.OS_FAMILY), OsFamily.CENTOS);

        assertLastCloudConfigAcceptsVersions("7", "rhel v 7", "rh-v:7.1", "v/7/x");
        assertLastCloudConfigDoesNotAcceptVersions("6", "71", "v71", "rh-v/6/");
    }

    
    @Test
    public void testRespectsRhel7WithDownloadUrl() {
        RiakEnterpriseNode r = mgmt.getEntityManager().createEntity(EntitySpec.create(RiakEnterpriseNode.class)
            .configure(RiakEnterpriseNode.OS_TYPE, RiakEnterpriseNode.RiakOsType.RHEL_7)
            .configure(RiakEnterpriseNode.DOWNLOAD_URL, DOWNLOAD_URL_SAMPLE_RHELCENTOS_7));
        start(r);
        
        Assert.assertEquals(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS.getAsSensorValue(r), DOWNLOAD_URL_SAMPLE_RHELCENTOS_7);
        assertMissing(RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU.getAsSensorValue(r));
        Assert.assertEquals(lastConfig.get(JcloudsLocationConfig.OS_FAMILY), OsFamily.RHEL);

        assertLastCloudConfigAcceptsVersions("7", "rhel v 7", "rh-v:7.1", "v/7/x");
        assertLastCloudConfigDoesNotAcceptVersions("6", "71", "v71", "rh-v/6/");
    }

    @Test
    public void testRespectsRhel6WithDaftDownload() {
        RiakEnterpriseNode r = mgmt.getEntityManager().createEntity(EntitySpec.create(RiakEnterpriseNode.class)
            .configure(RiakEnterpriseNode.OS_TYPE, RiakEnterpriseNode.RiakOsType.RHEL_6)
            .configure(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS, "daft"));
        start(r);
        
        Assert.assertEquals(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS.getAsSensorValue(r), "daft");
        assertMissing(RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU.getAsSensorValue(r));
        Assert.assertEquals(lastConfig.get(JcloudsLocationConfig.OS_FAMILY), OsFamily.RHEL);

        assertLastCloudConfigAcceptsVersions("6", "rhel v 6", "rh-v:6.1", "v/6/x");
        assertLastCloudConfigDoesNotAcceptVersions("7", "61", "v61", "rh-v/7/");
    }

    @Test
    public void testRespectsRhel6WithVersion7() {
        RiakEnterpriseNode r = mgmt.getEntityManager().createEntity(EntitySpec.create(RiakEnterpriseNode.class)
            .configure(RiakEnterpriseNode.OS_TYPE, RiakEnterpriseNode.RiakOsType.RHEL_6)
            .configure(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS, DOWNLOAD_URL_SAMPLE_RHELCENTOS_7));
        start(r);
        
        Assert.assertEquals(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS.getAsSensorValue(r), DOWNLOAD_URL_SAMPLE_RHELCENTOS_7);
        assertMissing(RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU.getAsSensorValue(r));
        Assert.assertEquals(lastConfig.get(JcloudsLocationConfig.OS_FAMILY), OsFamily.RHEL);

        assertLastCloudConfigAcceptsVersions("6", "rhel v 6", "rh-v:6.1", "v/6/x");
        assertLastCloudConfigDoesNotAcceptVersions("7", "61", "v61", "rh-v/7/");
    }

    @Test
    public void testRespectsNone() {
        RiakEnterpriseNode r = mgmt.getEntityManager().createEntity(EntitySpec.create(RiakEnterpriseNode.class)
            .configure(RiakEnterpriseNode.OS_TYPE, RiakEnterpriseNode.RiakOsType.NONE)
            .configure(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS, DOWNLOAD_URL_SAMPLE_RHELCENTOS_7));
        start(r);
        
        Assert.assertEquals(RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS.getAsSensorValue(r), DOWNLOAD_URL_SAMPLE_RHELCENTOS_7);
        assertMissing(RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU.getAsSensorValue(r));
        Assert.assertEquals(lastConfig.get(JcloudsLocationConfig.OS_FAMILY), null);

        assertLastCloudConfigNoVersionRegex();
    }

    private void assertLastCloudConfigNoVersionRegex() {
        String v = lastConfig.get(JcloudsLocationConfig.OS_VERSION_REGEX);
        if (v!=null) Assert.fail("Should have had no OS version regex, instead had: "+v);
    }

    private void assertLastCloudConfigAcceptsVersions(String s1, String ...sO) {
        String v = lastConfig.get(JcloudsLocationConfig.OS_VERSION_REGEX);
        if (v==null) Assert.fail("Expected an OS version regex");
        assertRegexAcceptsStrings(v, s1, sO);        
    }
    
    private void assertLastCloudConfigDoesNotAcceptVersions(String s1, String ...sO) {
        String v = lastConfig.get(JcloudsLocationConfig.OS_VERSION_REGEX);
        if (v==null) Assert.fail("Expected an OS version regex");
        assertRegexDoesNotAcceptStrings(v, s1, sO);                
    }
    
    private static void assertRegexAcceptsStrings(String regex, String s1, String ...sO) {
        Preconditions.checkNotNull(regex);
        Asserts.assertStringMatchesRegex(s1, regex);
        if (sO!=null) for (String s: sO)
            Asserts.assertStringMatchesRegex(s, regex);
    }

    private static void assertRegexDoesNotAcceptStrings(String regex, String s1, String ...sO) {
        Preconditions.checkNotNull(regex);
        Asserts.assertFalse(regex.matches(s1), "should not have matched '"+s1+"': "+regex);
        if (sO!=null) for (String s: sO)
            Asserts.assertFalse(regex.matches(s), "should not have matched '"+s+"': "+regex);
    }

    private void assertMissing(String v) {
        if (v.startsWith(RiakEnterpriseNodeImpl.URL_MISSING_ERROR_PREFIX)) return;
        Assert.fail("Did not start with missing prefix: "+v);
    }

    private ConfigBag lastConfig;
    private BailOutJcloudsLocation newBailOutLocation() {
        return mgmt.getLocationManager().createLocation(LocationSpec.create(BailOutJcloudsLocation.class)
            .configure(JcloudsLocationConfig.CLOUD_PROVIDER, "aws-ec2")
            .configure(JcloudsLocationConfig.ACCESS_IDENTITY, "ignored")
            .configure(JcloudsLocationConfig.ACCESS_CREDENTIAL, "ignored")
            .configure(BailOutJcloudsLocation.BUILD_TEMPLATE_INTERCEPTOR, new Function<ConfigBag,Void>() {
                @Override
                public Void apply(ConfigBag input) {
                    lastConfig = input;
                    return null;
                }
            }));
    }
    
    private BailOutJcloudsLocation start(Startable r) {
        BailOutJcloudsLocation l = newBailOutLocation();
        try {
            r.start(MutableList.of(l));
            Asserts.shouldHaveFailedPreviously();
        } catch (Exception e) {
            Asserts.expectedFailureContains(e, BailOutJcloudsLocation.ERROR_MESSAGE);
        }        
        return l;
    }

}
