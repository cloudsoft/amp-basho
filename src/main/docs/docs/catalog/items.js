var items = {
  "entities" : [ {
    "name" : "riak-ee-node",
    "type" : "riak-ee-node:0.3.0",
    "description" : "An optimized Basho Riak Enterprise single-node deployment\n",
    "iconUrl" : "http://basho.com/wp-content/uploads/2015/06/basho_vert.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "description" : "Controls behaviour when starting Startable children as part of this entity's lifecycle.",
      "defaultValue" : "NONE",
      "reconfigurable" : false,
      "label" : "children.startable.mode",
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
      } ],
      "links" : { }
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : "customize.latch",
      "links" : { }
    }, {
      "name" : "dontRequireTtyForSudo",
      "type" : "java.lang.Boolean",
      "description" : "Whether to explicitly set /etc/sudoers, so don't need tty (will leave unchanged if 'false'); some machines require a tty for sudo; brooklyn by default does not use a tty (so that it can get separate error+stdout streams); you can enable a tty as an option to every ssh command, or you can do it once and modify the machine so that a tty is not subsequently required.",
      "defaultValue" : false,
      "reconfigurable" : false,
      "label" : "dontRequireTtyForSudo",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : "download.addon.urls",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url",
      "links" : { }
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.debian",
      "links" : { }
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.mac",
      "links" : { }
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.rhelcentos",
      "links" : { }
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.ubuntu",
      "links" : { }
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : "entity.running",
      "links" : { }
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : "entity.started",
      "links" : { }
    }, {
      "name" : "epmdListenerPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Erlang Port Mapper Daemon Listener Port",
      "defaultValue" : "4369",
      "reconfigurable" : false,
      "label" : "epmdListenerPort",
      "links" : { }
    }, {
      "name" : "erlangPortRangeEnd",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Erlang Port Range End",
      "defaultValue" : "7999-65535",
      "reconfigurable" : false,
      "label" : "erlangPortRangeEnd",
      "links" : { }
    }, {
      "name" : "erlangPortRangeStart",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Erlang Port Range Start",
      "defaultValue" : "6000-65535",
      "reconfigurable" : false,
      "label" : "erlangPortRangeStart",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : "expandedinstall.dir",
      "links" : { }
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : "files.install",
      "links" : { }
    }, {
      "name" : "files.preinstall",
      "type" : "java.util.Map",
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : "files.preinstall",
      "links" : { }
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : "files.runtime",
      "links" : { }
    }, {
      "name" : "handoffListenerPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Handoff Listener Port",
      "defaultValue" : "8099-65535",
      "reconfigurable" : false,
      "label" : "handoffListenerPort",
      "links" : { }
    }, {
      "name" : "httpMonitoring.enabled",
      "type" : "java.lang.Boolean",
      "description" : "HTTP(S) monitoring enabled",
      "defaultValue" : true,
      "reconfigurable" : false,
      "label" : "httpMonitoring.enabled",
      "links" : { }
    }, {
      "name" : "inboundPorts.autoInfer",
      "type" : "java.lang.Boolean",
      "description" : "If set to false turns off the opening of ports based on naming convention, and also those that are of type PortRange in Java entities",
      "defaultValue" : true,
      "reconfigurable" : false,
      "label" : "inboundPorts.autoInfer",
      "links" : { }
    }, {
      "name" : "inboundPorts.configRegex",
      "type" : "java.lang.String",
      "description" : "Regex governing the opening of ports based on config names",
      "defaultValue" : ".*\\.port",
      "reconfigurable" : false,
      "label" : "inboundPorts.configRegex",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "reconfigurable" : false,
      "label" : "install.dir",
      "links" : { }
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : "install.latch",
      "links" : { }
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : "install.skip",
      "links" : { }
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : "install.unique_label",
      "links" : { }
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "description" : "Version to install (Default 2.0.5)",
      "defaultValue" : "2.0.5",
      "reconfigurable" : false,
      "label" : "install.version",
      "links" : { }
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "defaultValue" : true,
      "reconfigurable" : false,
      "label" : "java.check.hostname.bug",
      "links" : { }
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "description" : "Java command line options",
      "defaultValue" : [ ],
      "reconfigurable" : false,
      "label" : "java.opts",
      "links" : { }
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "description" : "Java command line system properties",
      "defaultValue" : { },
      "reconfigurable" : false,
      "label" : "java.sysprops",
      "links" : { }
    }, {
      "name" : "java.version.required",
      "type" : "java.lang.String",
      "description" : "Java version required",
      "defaultValue" : "1.7",
      "reconfigurable" : false,
      "label" : "java.version.required",
      "links" : { }
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : "launch.latch",
      "links" : { }
    }, {
      "name" : "metrics.usage.retrieve",
      "type" : "java.lang.Boolean",
      "description" : "Whether to retrieve the usage (e.g. performance) metrics",
      "defaultValue" : true,
      "reconfigurable" : false,
      "label" : "metrics.usage.retrieve",
      "links" : { }
    }, {
      "name" : "openIptables",
      "type" : "java.lang.Boolean",
      "description" : "Whether to open the INBOUND_PORTS via iptables rules; if true then ssh in to run iptables commands, as part of machine provisioning",
      "defaultValue" : false,
      "reconfigurable" : false,
      "label" : "openIptables",
      "links" : { }
    }, {
      "name" : "post.customize.command",
      "type" : "java.lang.String",
      "description" : "Command to be run after the customize method being called on the driver",
      "reconfigurable" : false,
      "label" : "post.customize.command",
      "links" : { }
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : "post.install.command",
      "links" : { }
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : "post.launch.command",
      "links" : { }
    }, {
      "name" : "pre.customize.command",
      "type" : "java.lang.String",
      "description" : "Command to be run prior to the customize method being called on the driver",
      "reconfigurable" : false,
      "label" : "pre.customize.command",
      "links" : { }
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : "pre.install.command",
      "links" : { }
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : "pre.launch.command",
      "links" : { }
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "defaultValue" : { },
      "reconfigurable" : false,
      "label" : "provisioning.properties",
      "links" : { }
    }, {
      "name" : "requiredOpenLoginPorts",
      "type" : "java.util.Collection",
      "description" : "The port(s) to be opened, to allow login",
      "defaultValue" : [ 22 ],
      "reconfigurable" : false,
      "label" : "requiredOpenLoginPorts",
      "links" : { }
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : "resources.install.latch",
      "links" : { }
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : "resources.runtime.latch",
      "links" : { }
    }, {
      "name" : "riak.advancedConfig.templateUrl",
      "type" : "java.lang.String",
      "description" : "URL of Template file (in freemarker format) for the advanced.config file",
      "defaultValue" : "classpath://advanced.config",
      "reconfigurable" : false,
      "label" : "riak.advancedConfig.templateUrl",
      "links" : { }
    }, {
      "name" : "riak.appConfig.templateUrl",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/app.config",
      "reconfigurable" : false,
      "label" : "riak.appConfig.templateUrl",
      "links" : { }
    }, {
      "name" : "riak.max.open.files",
      "type" : "java.lang.Integer",
      "description" : "Number of the open files required by Riak",
      "defaultValue" : 65536,
      "reconfigurable" : false,
      "label" : "riak.max.open.files",
      "links" : { }
    }, {
      "name" : "riak.networking.optimize",
      "type" : "java.lang.Boolean",
      "description" : "Optimize host networking when running in a VM",
      "defaultValue" : true,
      "reconfigurable" : false,
      "label" : "riak.networking.optimize",
      "links" : { }
    }, {
      "name" : "riak.os",
      "type" : "java.lang.Enum",
      "description" : "The OS to request. Default is to auto-detect based on the download url and to ensure IP-tables and firewalls do not block Riak. Use 'none' to disable inferencing and firewall reconfiguration.",
      "defaultValue" : "AUTODETECT",
      "reconfigurable" : false,
      "label" : "riak.os",
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
      } ],
      "links" : { }
    }, {
      "name" : "riak.pbPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Riak Protocol Buffers Port",
      "defaultValue" : "8087-65535",
      "reconfigurable" : false,
      "label" : "riak.pbPort",
      "links" : { }
    }, {
      "name" : "riak.replication.cluster.manager.port",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Cluster Manager Port",
      "defaultValue" : "9080-65535",
      "reconfigurable" : false,
      "label" : "riak.replication.cluster.manager.port",
      "links" : { }
    }, {
      "name" : "riak.riakConf.additionalContent",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for setting up additional settings in the riak.conf file",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "riak.riakConf.additionalContent",
      "links" : { }
    }, {
      "name" : "riak.riakConf.templateUrl.linux",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/riak.conf",
      "reconfigurable" : false,
      "label" : "riak.riakConf.templateUrl.linux",
      "links" : { }
    }, {
      "name" : "riak.riakConf.templateUrl.mac",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/riak-mac.conf",
      "reconfigurable" : false,
      "label" : "riak.riakConf.templateUrl.mac",
      "links" : { }
    }, {
      "name" : "riak.search",
      "type" : "java.lang.Boolean",
      "description" : "Deploy Solr and configure Riak to use it",
      "defaultValue" : false,
      "reconfigurable" : false,
      "label" : "riak.search",
      "links" : { }
    }, {
      "name" : "riak.vmArgs.templateUrl",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the vm.args config file",
      "defaultValue" : "classpath://org/apache/brooklyn/entity/nosql/riak/vm.args",
      "reconfigurable" : false,
      "label" : "riak.vmArgs.templateUrl",
      "links" : { }
    }, {
      "name" : "riak.webPort",
      "type" : "org.apache.brooklyn.api.location.PortRange",
      "description" : "Riak Web Port",
      "defaultValue" : "8098-65535",
      "reconfigurable" : false,
      "label" : "riak.webPort",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "reconfigurable" : false,
      "label" : "run.dir",
      "links" : { }
    }, {
      "name" : "search.solr.jmx_port",
      "type" : "java.lang.Integer",
      "description" : "Solr port",
      "defaultValue" : 8985,
      "reconfigurable" : false,
      "label" : "search.solr.jmx_port",
      "links" : { }
    }, {
      "name" : "search.solr.port",
      "type" : "java.lang.Integer",
      "description" : "Solr port",
      "defaultValue" : 8983,
      "reconfigurable" : false,
      "label" : "search.solr.port",
      "links" : { }
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : "setup.latch",
      "links" : { }
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "description" : "Map of environment variables to pass to the runtime shell",
      "defaultValue" : { },
      "reconfigurable" : false,
      "label" : "shell.env",
      "links" : { }
    }, {
      "name" : "softwareProcess.lifecycleTasks",
      "type" : "org.apache.brooklyn.entity.software.base.SoftwareProcessDriverLifecycleEffectorTasks",
      "description" : "An object that handles lifecycle of an entity's associated machine.",
      "defaultValue" : "org.apache.brooklyn.entity.software.base.SoftwareProcessDriverLifecycleEffectorTasks@5abe029d",
      "reconfigurable" : false,
      "label" : "softwareProcess.lifecycleTasks",
      "links" : { }
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "org.apache.brooklyn.util.time.Duration",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "defaultValue" : "10s",
      "reconfigurable" : false,
      "label" : "softwareProcess.maxSensorRebindDelay",
      "links" : { }
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : "start.latch",
      "links" : { }
    }, {
      "name" : "start.timeout",
      "type" : "org.apache.brooklyn.util.time.Duration",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "defaultValue" : "2m",
      "reconfigurable" : false,
      "label" : "start.timeout",
      "links" : { }
    }, {
      "name" : "stopIptables",
      "type" : "java.lang.Boolean",
      "description" : "Whether to stop iptables entirely; if true then ssh in to stop the iptables service, as part of machine provisioning",
      "defaultValue" : false,
      "reconfigurable" : false,
      "label" : "stopIptables",
      "links" : { }
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : "templates.install",
      "links" : { }
    }, {
      "name" : "templates.preinstall",
      "type" : "java.util.Map",
      "description" : "Mapping of templates, to be filled in and copied before pre-install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : "templates.preinstall",
      "links" : { }
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : "templates.runtime",
      "links" : { }
    } ]
  }, {
    "name" : "riak-ee-cluster",
    "type" : "riak-ee-cluster:0.3.0",
    "description" : "A configured cluster of Basho Riak Enterprise nodes\noptimized for the OS implied by the given download.url      \n",
    "iconUrl" : "http://basho.com/wp-content/uploads/2015/06/basho_vert.png",
    "config" : [ {
      "name" : "cluster.initial.quorumSize",
      "type" : "java.lang.Integer",
      "description" : "Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if < 0, then use value of INITIAL_SIZE)",
      "defaultValue" : -1,
      "reconfigurable" : false,
      "label" : "cluster.initial.quorumSize",
      "links" : { }
    }, {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "description" : "Initial cluster size",
      "defaultValue" : 1,
      "reconfigurable" : false,
      "label" : "cluster.initial.size",
      "links" : { }
    }, {
      "name" : "cluster.member.id",
      "type" : "java.lang.Integer",
      "description" : "The unique ID number (sequential) of a member of a cluster",
      "reconfigurable" : false,
      "label" : "cluster.member.id",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url",
      "links" : { }
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.debian",
      "links" : { }
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.mac",
      "links" : { }
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.rhelcentos",
      "links" : { }
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.ubuntu",
      "links" : { }
    }, {
      "name" : "dynamiccluster.availabilityZones",
      "type" : "java.util.Collection",
      "description" : "availability zones to use (if non-null, overrides other configuration)",
      "reconfigurable" : false,
      "label" : "dynamiccluster.availabilityZones",
      "links" : { }
    }, {
      "name" : "dynamiccluster.customChildFlags",
      "type" : "java.util.Map",
      "description" : "Additional flags to be passed to children when they are being created",
      "defaultValue" : { },
      "reconfigurable" : false,
      "label" : "dynamiccluster.customChildFlags",
      "links" : { }
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "org.apache.brooklyn.core.entity.factory.EntityFactory",
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false,
      "label" : "dynamiccluster.factory",
      "links" : { }
    }, {
      "name" : "dynamiccluster.firstmemberspec",
      "type" : "org.apache.brooklyn.api.entity.EntitySpec",
      "description" : "entity spec for creating new cluster members, used for the very first member if different",
      "reconfigurable" : false,
      "label" : "dynamiccluster.firstmemberspec",
      "links" : { }
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "org.apache.brooklyn.api.entity.EntitySpec",
      "description" : "entity spec for creating new cluster members",
      "defaultValue" : "EntitySpec{type=interface io.cloudsoft.basho.RiakEnterpriseNode}@68a84820",
      "reconfigurable" : false,
      "label" : "dynamiccluster.memberspec",
      "links" : { }
    }, {
      "name" : "dynamiccluster.numAvailabilityZones",
      "type" : "java.lang.Integer",
      "description" : "number of availability zones to use (will attempt to auto-discover this number)",
      "reconfigurable" : false,
      "label" : "dynamiccluster.numAvailabilityZones",
      "links" : { }
    }, {
      "name" : "dynamiccluster.quarantineFailedEntities",
      "type" : "java.lang.Boolean",
      "description" : "If true, will quarantine entities that fail to start; if false, will get rid of them (i.e. delete them)",
      "defaultValue" : true,
      "reconfigurable" : false,
      "label" : "dynamiccluster.quarantineFailedEntities",
      "links" : { }
    }, {
      "name" : "dynamiccluster.quarantineFilter",
      "type" : "com.google.common.base.Predicate",
      "description" : "Quarantine the failed nodes that pass this filter (given the exception thrown by the node). Default is those that did not fail with NoMachinesAvailableException (Config ignored if quarantineFailedEntities is false)",
      "reconfigurable" : false,
      "label" : "dynamiccluster.quarantineFilter",
      "links" : { }
    }, {
      "name" : "dynamiccluster.removalstrategy",
      "type" : "com.google.common.base.Function",
      "description" : "strategy for deciding what to remove when down-sizing",
      "reconfigurable" : false,
      "label" : "dynamiccluster.removalstrategy",
      "links" : { }
    }, {
      "name" : "dynamiccluster.restartMode",
      "type" : "java.lang.String",
      "description" : "How this cluster should handle restarts; by default it is disallowed, but this key can specify a different mode. Modes supported by dynamic cluster are 'off', 'sequqential', or 'parallel'. However subclasses can define their own modes or may ignore this.",
      "reconfigurable" : false,
      "label" : "dynamiccluster.restartMode",
      "links" : { }
    }, {
      "name" : "dynamiccluster.zone.enable",
      "type" : "java.lang.Boolean",
      "description" : "Whether to use availability zones, or just deploy everything into the generic location",
      "defaultValue" : false,
      "reconfigurable" : false,
      "label" : "dynamiccluster.zone.enable",
      "links" : { }
    }, {
      "name" : "dynamiccluster.zone.failureDetector",
      "type" : "org.apache.brooklyn.entity.group.DynamicCluster$ZoneFailureDetector",
      "description" : "Zone failure detector",
      "defaultValue" : "org.apache.brooklyn.entity.group.zoneaware.ProportionalZoneFailureDetector@7f4758ad",
      "reconfigurable" : false,
      "label" : "dynamiccluster.zone.failureDetector",
      "links" : { }
    }, {
      "name" : "dynamiccluster.zone.placementStrategy",
      "type" : "org.apache.brooklyn.entity.group.DynamicCluster$NodePlacementStrategy",
      "description" : "Node placement strategy",
      "defaultValue" : "org.apache.brooklyn.entity.group.zoneaware.BalancingNodePlacementStrategy@7d9d9dd6",
      "reconfigurable" : false,
      "label" : "dynamiccluster.zone.placementStrategy",
      "links" : { }
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "reconfigurable" : false,
      "label" : "enricher.service_state.children_and_members.quorum.running",
      "links" : { }
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "reconfigurable" : false,
      "label" : "enricher.service_state.children_and_members.quorum.up",
      "links" : { }
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "description" : "Deprecated: Add delegate child entities for members of the group",
      "defaultValue" : false,
      "reconfigurable" : false,
      "label" : "group.members.delegate",
      "links" : { }
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "defaultValue" : "%s",
      "reconfigurable" : false,
      "label" : "group.members.delegate.nameFormat",
      "links" : { }
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "defaultValue" : { },
      "reconfigurable" : false,
      "label" : "provisioning.properties",
      "links" : { }
    }, {
      "name" : "riak.cluster.clusterName",
      "type" : "java.lang.String",
      "description" : "Unique name of the cluster, used in multi-datacenter replication",
      "reconfigurable" : false,
      "label" : "riak.cluster.clusterName",
      "links" : { }
    }, {
      "name" : "riak.cluster.delayBeforeAdvertisingCluster",
      "type" : "org.apache.brooklyn.util.time.Duration",
      "description" : "Delay after cluster is started before checking and advertising its availability",
      "defaultValue" : "2m",
      "reconfigurable" : false,
      "label" : "riak.cluster.delayBeforeAdvertisingCluster",
      "links" : { }
    }, {
      "name" : "riak.os",
      "type" : "java.lang.Enum",
      "description" : "The OS to request. Default is to auto-detect based on the download url and to ensure IP-tables and firewalls do not block Riak. Use 'none' to disable inferencing and firewall reconfiguration.",
      "defaultValue" : "AUTODETECT",
      "reconfigurable" : false,
      "label" : "riak.os",
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
      } ],
      "links" : { }
    } ]
  }, {
    "name" : "riak-ee-fabric",
    "type" : "riak-ee-fabric:0.3.0",
    "description" : "Multi-datacenter Basho Riak Enterprise clusters in any number of locations\n",
    "iconUrl" : "http://basho.com/wp-content/uploads/2015/06/basho_vert.png",
    "config" : [ {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url",
      "links" : { }
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.debian",
      "links" : { }
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.mac",
      "links" : { }
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.rhelcentos",
      "links" : { }
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "defaultValue" : "",
      "reconfigurable" : false,
      "label" : "download.url.ubuntu",
      "links" : { }
    }, {
      "name" : "dynamiccfabric.memberspec",
      "type" : "org.apache.brooklyn.api.entity.EntitySpec",
      "description" : "entity spec for creating new cluster members",
      "reconfigurable" : false,
      "label" : "dynamiccfabric.memberspec",
      "links" : { }
    }, {
      "name" : "dynamicfabric.customChildFlags",
      "type" : "java.util.Map",
      "description" : "Additional flags to be passed to children when they are being created",
      "defaultValue" : { },
      "reconfigurable" : false,
      "label" : "dynamicfabric.customChildFlags",
      "links" : { }
    }, {
      "name" : "dynamicfabric.displayNamePrefix",
      "type" : "java.lang.String",
      "description" : "Display name prefix, for created children",
      "reconfigurable" : false,
      "label" : "dynamicfabric.displayNamePrefix",
      "links" : { }
    }, {
      "name" : "dynamicfabric.displayNameSuffix",
      "type" : "java.lang.String",
      "description" : "Display name suffix, for created children",
      "reconfigurable" : false,
      "label" : "dynamicfabric.displayNameSuffix",
      "links" : { }
    }, {
      "name" : "dynamicfabric.factory",
      "type" : "org.apache.brooklyn.core.entity.factory.EntityFactory",
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false,
      "label" : "dynamicfabric.factory",
      "links" : { }
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "reconfigurable" : false,
      "label" : "enricher.service_state.children_and_members.quorum.running",
      "links" : { }
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "org.apache.brooklyn.util.collections.QuorumCheck",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "reconfigurable" : false,
      "label" : "enricher.service_state.children_and_members.quorum.up",
      "links" : { }
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "description" : "Deprecated: Add delegate child entities for members of the group",
      "defaultValue" : false,
      "reconfigurable" : false,
      "label" : "group.members.delegate",
      "links" : { }
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "defaultValue" : "%s",
      "reconfigurable" : false,
      "label" : "group.members.delegate.nameFormat",
      "links" : { }
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "defaultValue" : { },
      "reconfigurable" : false,
      "label" : "provisioning.properties",
      "links" : { }
    }, {
      "name" : "riak.fabric.cluster.namer",
      "type" : "com.google.common.base.Function",
      "description" : "Function used to provide the riak.replication.clusterName for a given location",
      "reconfigurable" : false,
      "label" : "riak.fabric.cluster.namer",
      "links" : { }
    }, {
      "name" : "riak.os",
      "type" : "java.lang.Enum",
      "description" : "The OS to request. Default is to auto-detect based on the download url and to ensure IP-tables and firewalls do not block Riak. Use 'none' to disable inferencing and firewall reconfiguration.",
      "defaultValue" : "AUTODETECT",
      "reconfigurable" : false,
      "label" : "riak.os",
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
      } ],
      "links" : { }
    } ]
  }, {
    "name" : "Riak EE Fabric Wizard",
    "type" : "riak-ee-sample-wizard:0.3.0",
    "description" : "A simple wizard for creating one or more optimized Basho Riak EE clusters.\nYou can supply multiple locations to generate multiple clusters \nwith multi-cluster replication configured.\nThe download URL and initial size are advertised as parameters.\nAdditionally, any of the config keys from \nriak-ee-fabric, riak-ee-cluster, or riak-ee-node can be used.\n",
    "iconUrl" : "http://basho.com/wp-content/uploads/2015/06/basho_vert.png",
    "config" : [ {
      "name" : "riak.download.url",
      "type" : "java.lang.String",
      "description" : "The private download link for accessing Riak EE. \nThe RHEL/CentOS or Ubuntu URLs can be used, and \nthe OS will be autodetected.\n",
      "reconfigurable" : false,
      "label" : "Riak EE download URL",
      "priority" : 0.0,
      "links" : { }
    }, {
      "name" : "riak.cluster.size",
      "type" : "java.lang.Integer",
      "description" : "The initial number of nodes for each Riak cluster\n",
      "defaultValue" : 5,
      "reconfigurable" : false,
      "label" : "Cluster initial size",
      "priority" : 1.0,
      "links" : { }
    } ]
  }, {
    "name" : "Riak EE Cluster Template",
    "type" : "riak-ee-sample-template:0.3.0",
    "description" : "A simple template for creating an optimized Basho Riak EE cluster,\nfor use in the YAML composer.\nEdit the download.url and the location and use.\nAdditionally, any of the config keys from riak-ee-cluster can be used. \n",
    "iconUrl" : "http://basho.com/wp-content/uploads/2015/06/basho_vert.png",
    "config" : [ ]
  } ],
  "policies" : [ ],
  "enrichers" : [ ],
  "locations" : [ ],
  "locationResolvers" : [ ]
}