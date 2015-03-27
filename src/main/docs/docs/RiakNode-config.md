---
---

# RiakNode config keys

### children.startable.mode

*description* children.startable.mode<br>
*value type* java.lang.Enum<br>
*default value* &nbsp;

<br>

### customize.latch

*description* Latch for blocking customize until ready<br>
*value type* java.lang.Boolean<br>
*default value* &nbsp;

<br>

### download.addon.urls

*description* URL patterns for downloading named add-ons (will substitute things like ${version} automatically)<br>
*value type* java.util.Map<br>
*default value* &nbsp;

<br>

### download.url

*description* URL pattern for downloading the installer (will substitute things like ${version} automatically)<br>
*value type* java.lang.String<br>
*default value* &nbsp;

<br>

### download.url.debian

*description* URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)<br>
*value type* java.lang.String<br>
*default value* http://s3.amazonaws.com/downloads.basho.com/riak/${entity.majorVersion}/${entity.fullVersion}/debian/$OS_RELEASE/riak_${entity.fullVersion}-1_amd64.deb

<br>

### download.url.mac

*description* URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)<br>
*value type* java.lang.String<br>
*default value* http://s3.amazonaws.com/downloads.basho.com/riak/${entity.majorVersion}/${entity.fullVersion}/osx/10.8/riak-${entity.fullVersion}-OSX-x86_64.tar.gz

<br>

### download.url.rhelcentos

*description* URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)<br>
*value type* java.lang.String<br>
*default value* http://s3.amazonaws.com/downloads.basho.com/riak/${entity.majorVersion}/${entity.fullVersion}/rhel/${entity.osMajorVersion}/riak-${entity.fullVersion}-1.el${entity.osMajorVersion}.x86_64.rpm

<br>

### download.url.ubuntu

*description* URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)<br>
*value type* java.lang.String<br>
*default value* http://s3.amazonaws.com/downloads.basho.com/riak/${entity.majorVersion}/${entity.fullVersion}/ubuntu/$OS_RELEASE/riak_${entity.fullVersion}-1_amd64.deb

<br>

### entity.running

*description* Skip the startup process entirely, if service already running<br>
*value type* java.lang.Boolean<br>
*default value* &nbsp;

<br>

### entity.started

*description* Skip the startup process entirely, for running services<br>
*value type* java.lang.Boolean<br>
*default value* &nbsp;

<br>

### expandedinstall.dir

*description* Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)<br>
*value type* java.lang.String<br>
*default value* &nbsp;

<br>

### files.install

*description* Mapping of files, to be copied before install, to destination name relative to installDir<br>
*value type* java.util.Map<br>
*default value* &nbsp;

<br>

### files.runtime

*description* Mapping of files, to be copied before customisation, to destination name relative to runDir<br>
*value type* java.util.Map<br>
*default value* &nbsp;

<br>

### install.dir

*description* Directory for this software to be installed in<br>
*value type* java.lang.String<br>
*default value* <dd>${config['onbox.base.dir']!config['brooklyn.datadir']!'/
<error>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}</error>
</dd>

<br>

### install.latch

*description* Latch for blocking install until ready<br>
*value type* java.lang.Boolean<br>
*default value* &nbsp;

<br>

### install.skip

*description* Skip the driver install commands entirely, for pre-installed software<br>
*value type* java.lang.Boolean<br>
*default value* &nbsp;

<br>

### install.unique_label

*description* Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use<br>
*value type* java.lang.String<br>
*default value* &nbsp;

<br>

### install.version

*description* Version to install (Default 2.0.5)<br>
*value type* java.lang.String<br>
*default value* 2.0.5

<br>

### launch.latch

*description* Latch for blocking launch until ready<br>
*value type* java.lang.Boolean<br>
*default value* &nbsp;

<br>

### post.install.command

*description* Command to be run after the install method being called on the driver<br>
*value type* java.lang.String<br>
*default value* &nbsp;

<br>

### post.launch.command

*description* Command to be run after the launch method being called on the driver<br>
*value type* java.lang.String<br>
*default value* &nbsp;

<br>

### pre.install.command

*description* Command to be run prior to the install method being called on the driver<br>
*value type* java.lang.String<br>
*default value* &nbsp;

<br>

### pre.launch.command

*description* Command to be run prior to the launch method being called on the driver<br>
*value type* java.lang.String<br>
*default value* &nbsp;

<br>

### provisioning.properties

*description* Custom properties to be passed in when provisioning a new machine<br>
*value type* java.util.Map<br>
*default value* [object Object]

<br>

### resources.install.latch

*description* Latch for blocking install resources until ready<br>
*value type* java.lang.Boolean<br>
*default value* &nbsp;

<br>

### resources.runtime.latch

*description* Latch for blocking runtime resources until ready<br>
*value type* java.lang.Boolean<br>
*default value* &nbsp;

<br>

### riak.appConfig.templateUrl

*description* Template file (in freemarker format) for the app.config config file<br>
*value type* java.lang.String<br>
*default value* classpath://brooklyn/entity/nosql/riak/app.config

<br>

### riak.epmdListenerPort

*description* Erlang Port Mapper Daemon Listener Port<br>
*value type* brooklyn.location.PortRange<br>
*default value* 4369

<br>

### riak.erlangPortRangeEnd

*description* Erlang Port Range End<br>
*value type* brooklyn.location.PortRange<br>
*default value* 7999-65535

<br>

### riak.erlangPortRangeStart

*description* Erlang Port Range Start<br>
*value type* brooklyn.location.PortRange<br>
*default value* 6000-65535

<br>

### riak.handoffListenerPort

*description* Handoff Listener Port<br>
*value type* brooklyn.location.PortRange<br>
*default value* 8099-65535

<br>

### riak.networking.optimize

*description* Optimize host networking when running in a VM<br>
*value type* java.lang.Boolean<br>
*default value* true

<br>

### riak.pbPort

*description* Riak Protocol Buffers Port<br>
*value type* brooklyn.location.PortRange<br>
*default value* 8087-65535

<br>

### riak.riakConf.templateUrl.linux

*description* Template file (in freemarker format) for the app.config config file<br>
*value type* java.lang.String<br>
*default value* classpath://brooklyn/entity/nosql/riak/riak.conf

<br>

### riak.riakConf.templateUrl.mac

*description* Template file (in freemarker format) for the app.config config file<br>
*value type* java.lang.String<br>
*default value* classpath://brooklyn/entity/nosql/riak/riak-mac.conf

<br>

### riak.search.solr.jmx_port

*description* Solr port<br>
*value type* brooklyn.location.PortRange<br>
*default value* 8985-65535

<br>

### riak.search.solr.port

*description* Solr port<br>
*value type* brooklyn.location.PortRange<br>
*default value* 8093-65535

<br>

### riak.vmArgs.templateUrl

*description* Template file (in freemarker format) for the vm.args config file<br>
*value type* java.lang.String<br>
*default value* classpath://brooklyn/entity/nosql/riak/vm.args

<br>

### riak.webPort

*description* Riak Web Port<br>
*value type* brooklyn.location.PortRange<br>
*default value* 8098-65535

<br>

### run.dir

*description* Directory for this software to be run from<br>
*value type* java.lang.String<br>
*default value* <dd>${config['onbox.base.dir']!config['brooklyn.datadir']!'/
<error>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}</error>
</dd>

<br>

### setup.latch

*description* Latch for blocking setup until ready<br>
*value type* java.lang.Boolean<br>
*default value* &nbsp;

<br>

### shell.env

*description* Map of environment variables to pass to the runtime shell<br>
*value type* java.util.Map<br>
*default value* [object Object]

<br>

### softwareProcess.maxSensorRebindDelay

*description* The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.<br>
*value type* brooklyn.util.time.Duration<br>
*default value* 10s

<br>

### start.latch

*description* Latch for blocking start until ready<br>
*value type* java.lang.Boolean<br>
*default value* &nbsp;

<br>

### start.timeout

*description* Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)<br>
*value type* brooklyn.util.time.Duration<br>
*default value* 2m

<br>

### templates.install

*description* Mapping of templates, to be filled in and copied before install, to destination name relative to installDir<br>
*value type* java.util.Map<br>
*default value* &nbsp;

<br>

### templates.runtime

*description* Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir<br>
*value type* java.util.Map<br>
*default value* &nbsp;

<br>

## RiakEnterpriseNode

The properties bellow are only available in the amp-basho (the enterprise brooklyn module for riak)

#### riak.replication.cluster.manager.port

*description* Cluster Manager Port<br>
*value type* PortRange<br>
*default value* 9080+

<br>

### riak.advancedConfig.templateUrl

*description* Template file (in freemarker format) for the advanced.config file
*value type* String
*default value* classpath://advanced.config

<br>

### riak.additionalConfig.file

*description* Template file (in freemarker format) for setting up additional settings in the riak.conf file
*value type* String
*default value* null