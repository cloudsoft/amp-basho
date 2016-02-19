package io.cloudsoft.basho;

import java.util.List;
import java.util.Map;

import org.apache.brooklyn.api.location.MachineProvisioningLocation;
import org.apache.brooklyn.core.sensor.AttributeSensorAndConfigKey;
import org.apache.brooklyn.entity.nosql.riak.RiakNodeImpl;
import org.apache.brooklyn.location.jclouds.JcloudsLocationConfig;
import org.apache.brooklyn.util.collections.MutableList;
import org.apache.brooklyn.util.collections.MutableMap;
import org.apache.brooklyn.util.text.Strings;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.collect.ImmutableList;

public class RiakEnterpriseNodeImpl extends RiakNodeImpl implements RiakEnterpriseNode {

    private static final Logger log = LoggerFactory.getLogger(RiakEnterpriseNodeImpl.class);

    @Override
    public void init() {
        super.init();

        RiakOsType os = getConfig(OS_TYPE);
        List<AttributeSensorAndConfigKey<String,String>> allowed = inferAllowableDownloadUrlKeys(os, true);

        if (allowed.isEmpty()) {
            if (os!=null && os!=RiakOsType.AUTODETECT) {
                throw new IllegalArgumentException(
                    "At least one enterprise download URL compatible with "+os+" must be supplied for the enterprise edition, such as "
                        + RiakEnterpriseNode.DOWNLOAD_URL.getName());                
            } else {
                throw new IllegalArgumentException(
                    "At least one enterprise download URL must be supplied for the enterprise edition, such as "
                        + RiakEnterpriseNode.DOWNLOAD_URL.getName()+". "+
                        "Optionally you can specify the "+RiakEnterpriseNode.OS_TYPE.getName()+".");
            }
        }
    }

    static final String URL_MISSING_ERROR_PREFIX = "ERROR: No URL available";
    private List<AttributeSensorAndConfigKey<String,String>> inferAllowableDownloadUrlKeys(RiakOsType os, boolean setDefaultValue) {
        List<AttributeSensorAndConfigKey<String,String>> downloadUrlConfigs = ImmutableList.of( 
            RiakEnterpriseNode.DOWNLOAD_URL_UBUNTU, 
            RiakEnterpriseNode.DOWNLOAD_URL_RHEL_CENTOS,
            RiakEnterpriseNode.DOWNLOAD_URL_DEBIAN, 
            RiakEnterpriseNode.DOWNLOAD_URL_MAC);

        List<AttributeSensorAndConfigKey<String,String>> allowed = MutableList.of();

        String defaultDownload = getConfig(RiakEnterpriseNode.DOWNLOAD_URL);
        for (AttributeSensorAndConfigKey<String,String> key: downloadUrlConfigs) {
            String v = getConfig(key.getConfigKey());
            if (Strings.isBlank( v )) {
                if (isDownloadUrlCompatible(os, key, defaultDownload)) {
                    allowed.add(key);
                    if (setDefaultValue) {
                        config().set(key, defaultDownload);
                    }
                } else {
                    if (setDefaultValue) {
                        config().set(key, URL_MISSING_ERROR_PREFIX+" - "+key.getName());
                    }
                }
            } else if (v.startsWith(URL_MISSING_ERROR_PREFIX)) {
                // ignore, already set as missing
            } else {
                allowed.add(key);
            }
        }
        return allowed;
    }

    private boolean isDownloadUrlCompatible(RiakOsType os, AttributeSensorAndConfigKey<String, String> key, String value) {
        if (Strings.isBlank(value)) return false;
        if (os==null || os==RiakOsType.NONE) return true;
        if (os==RiakOsType.AUTODETECT) {
            return (getInferredOsType(value, key)!=null);
        }
        if (key.getName().toLowerCase().contains(os.getOsFamily())) return true;
        return false;
    }

    /** finds the first {@link RiakOsType} compatible with both the value and the key */
    private RiakOsType getInferredOsType(String value, AttributeSensorAndConfigKey<String, String> key) {
        for (RiakOsType t: RiakOsType.values()) {
            if (t.getOsFamily()==null) continue;
            if (key==null || key.getName().toLowerCase().contains(t.getOsFamily())) {
                if (value==null || value.matches(t.getUrlRegex())) {
                    return t;
                }
            }
        }
        return null;
    }

    private List<RiakOsType> inferOsTypes(List<AttributeSensorAndConfigKey<String, String>> allowed) {
        List<RiakOsType> versionMatchUrl = MutableList.of();
        List<RiakOsType> anyMatchUrl = MutableList.of();
        for (RiakOsType t: RiakOsType.values()) {
            if (Strings.isBlank(t.getOsFamily())) continue;
            for (AttributeSensorAndConfigKey<String, String> k: allowed) {
                String v = k.getAsSensorValue(this);
                if (isDownloadUrlCompatible(t, k, v)) {
                    anyMatchUrl.add(t);
                    if (v.matches(t.getUrlVersionRegex())) {
                        versionMatchUrl.add(t);
                    }
                }
            }
        }
        if (!versionMatchUrl.isEmpty()) {
            // prefer items where the URL matches the version
            return versionMatchUrl;
        }
        return anyMatchUrl;
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

    @Override
    protected Map<String, Object> obtainProvisioningFlags(@SuppressWarnings("rawtypes") MachineProvisioningLocation location) {
        Map<String, Object> result = super.obtainProvisioningFlags(location);

        if (result.containsKey(JcloudsLocationConfig.OS_FAMILY.getName())) {
            // don't set anything is os family was specified
            return result;
        }

        RiakOsType os = getConfig(OS_TYPE);
        if (os==null || os==RiakOsType.NONE) {
            // do nothing
        } else {
            result = MutableMap.copyOf(result);
            
            List<AttributeSensorAndConfigKey<String,String>> allowed = inferAllowableDownloadUrlKeys(os, true);
            // don't provision macs
            allowed.remove(RiakEnterpriseNode.DOWNLOAD_URL_MAC);

            boolean versionUnknown = false;

            if (os==RiakOsType.AUTODETECT) {
                List<RiakOsType> osTypes = inferOsTypes(allowed);
                if (osTypes.isEmpty()) {
                    // nothing found - error
                    if (allowed.isEmpty()) {
                        throw new IllegalArgumentException(
                            "At least one enterprise download URL must be supplied for the enterprise edition, such as "
                                + RiakEnterpriseNode.DOWNLOAD_URL.getName());
                    } else {
                        throw new IllegalArgumentException(
                            "Could not infer OS from download URLs "+allowed+". "
                                + "Set "+RiakEnterpriseNode.OS_TYPE.getName()+" explicitly.");                    
                    }
                }
                os = osTypes.iterator().next();
                int count = 0;
                for (RiakOsType t: osTypes) {
                    if (os.getOsFamily().equals(t.getOsFamily()))
                        count++;
                }
                if (count>1) {
                    versionUnknown = true;
                }
            } else {
                boolean validated = false;
                for (AttributeSensorAndConfigKey<String,String> k: allowed) {
                    String v = k.getAsSensorValue(this);
                    if (isDownloadUrlCompatible(os, k, v)) {
                        validated = true;
                        break;
                    }
                }
                if (!validated) {
                    throw new IllegalArgumentException(
                        "At least one enterprise download URL compatible with "+os+" must be supplied for the enterprise edition, such as "
                            + RiakEnterpriseNode.DOWNLOAD_URL.getName());                    
                }
            }
            result.put(JcloudsLocationConfig.OS_FAMILY.getName(), os.getOsFamily());
            if (!versionUnknown) {
                result.put(JcloudsLocationConfig.OS_VERSION_REGEX.getName(), os.getOsVersionRegex());
            }

            log.debug("Specifying "+os+": "+result+" when provisioning "+this);
        }

        return result;
    }

}
