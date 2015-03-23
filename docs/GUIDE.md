# Getting Started with Riak

After you have brooklyn installed. You can start defining your Riak Setup in the [brooklyn web console](http://localhost:8081)
Here are some [Riak Blueprint Examples](https://gist.github.com/bostko/427751f21cd8f11b1f61)

By default, the installation of riak is performed by choosing the correct installation package from packagecloud.io.
If for some reason packagecloud.io is down or there is a problem brooklyn falls back to downloading the package from
the default locations in http://docs.basho.com/riak/latest/downloads/

## Setting up Riak EE blueprint

The difference between the standard Riak blueprint is that you have to specify urls for the Riak EE package.
Example:
```yaml
services:
- type: io.cloudsoft.basho.RiakEnterpriseNode
  brooklyn.config:
    cluster.initial.size: 3
    download.url.rhelcentos: http://official_url/riak_ee.rpm
    download.url.debian: http://official_url/riak_ee.deb
    download.url.ubuntu: http://official_url/riak_ee.deb
```

TODO: Add the following in riak.conf with config keys (defaulting to default values): Node Name, Listen Address & Port, ring_size, distributed_cookie, search


Bring-your-own-config: allow for custom template of riak.conf (or document existing support) - freemarker template
Custom version (document how this can be done)
Make the documentation public
Riak EE option
Test scaling of the cluster. It doesn't rejoin properly
Leave cluster
Service control: Enable/Disable, Start/Stop, Restart
Join cluster
"build blueprint for favourite demo web app and riak backend configuration, including EE variant with MDC;
are there good demo apps?  not really, keep using chat app for now....  B to ask marketing"
collect relevant sensors
Create and activate bucket types: as effectors, and as config key supported in blueprint
Use/borrow from chef recipe for OS tuning

MDC v3: Set Cluster Name
MDC v3: Configure Address & Port
MDC v3: Connect
MDC v3: Realtime: Enable/Disable, Start/Stop
MDC v3: Full Sync: Enable/Disable, Start/Stop, Configure Scheduling

# Writing a blueprint

## Parameters

You can tune brooklyn with various parameters like this in the yaml

<pre>
services:
- type: io.cloudsoft.basho.RiakEnterpriseFabric
  brooklyn.config:
    install.version: 2.0.5
    riak.advancedConfig.templateUrl: http://
</pre>

List of all the config keys available
- **riak.advancedConfig.templateUrl**: *Template file (in freemarker format) for the advanced.config file*

install.version: 2.0.5
clusterName
advanced.config: config-url


Here are all the config parameters for:

* [RiakNode](RiakNode-config.md)
* [RiakCluster](RiakCluster-config.md)


# Managing the server

## Effectors

Expand to Riak Node level
Go to Effectors tab
Here you can expand to the MDC cluster and the cluster itself and you can manage the nodes in the different levels

### RiakEnterpriseFabric

![RiakEnterpriseFabric](https://raw.githubusercontent.com/cloudsoft/amp-basho/demo-documentation/docs/images/riak_enterprise_mdc.png?token=ABhWrk-nmVHq_1D5XKhnfaCLZGvWMhggks5VF_BhwA%3D%3D)

The list of effectors you can invoke:

- **restart**	Restart the process/service represented by an entity
- **start**	Start the process/service represented by an entity
- **stop**	Stop the process/service represented by an entity

---------------------------------------

<br>

### RiakEnterpriseCluster

![RiakEnterpriseCluster](https://raw.githubusercontent.com/cloudsoft/amp-basho/demo-documentation/docs/images/riak_ee_cluster_level.png?token=ABhWrpwcuDx43MiPoKCnqx1-mM7_O9liks5VF_BMwA%3D%3D)

The list of effectors you can invoke:

- **replaceMember**	Replaces the entity with the given ID, if it is a member; first adds a new member, then removes this one. Returns id of the new entity; or throws exception if couldn't be replaced.
- **resize**	Changes the size of the entity (e.g. the number of nodes in a cluster)
- **resizeByDelta**	Changes the size of the cluster.
- **restart**	Restart the process/service represented by an entity
- **start**	Start the process/service represented by an entity
- **stop**	Stop the process/service represented by an entity

---------------------------------------

<br>

### RiakEnterpriseNode

![RiakEnterpriseNode](https://raw.githubusercontent.com/cloudsoft/amp-basho/demo-documentation/docs/images/riak_ee_node_level.png?token=ABhWrqkbs2_k6TVk-W5RjSzfAzDrd7Auks5VF_A9wA%3D%3D)

The list of effectors you can invoke:

- **commitCluster**	Commit changes made to a Riak cluster	Invoke
- **joinCluster**	Add this riak node to the Riak cluster	Invoke
- **leaveCluster**	Remove this Riak node from the cluster	Invoke
- **recoverFailedNode**	Recover a failed Riak node and join it back to the cluster (by passing it a working node on the cluster 'node')	Invoke
- **restart**	Restart the process/service represented by an entity	Invoke
- **start**	Start the process/service represented by an entity	Invoke
- **stop**	Stop the process/service represented by an entity

---------------------------------------

<br>

## Sensors

![RiakEnterpriseNode](https://raw.githubusercontent.com/cloudsoft/amp-basho/demo-documentation/docs/images/riak_ee_node_sensors.png?token=ABhWrp1ninNjWMKZFaRFBOdZAa0ez5_Mks5VGOilwA%3D%3D)
