---
---

# Behemoth Example:  Riak Multi-Datacenter and Web App with Policy

This example combines many of the advanced blueprinting capabilities, showing:

* Running multiple Riak EE clusters in multiple locations
* Including one location which is a set of pre-existing hosts referenced by their IP addresses
* Setting up an elastic Chat web app configured with a Riak back-end
* Attaching a scaling policy to the web tier -- and with suitable configuration this same
  policy can be attached to Riak clusters

Pick and choose the components you need for your project from this example,
supplementing as you need with thes references on
[other Brooklyn-supported software components](https://brooklyn.io/learnmore/catalog/)
and the configuration keys for [nodes](RiakNode-config.md) and [clusters](RiakCluster-config.md).


```
name: Web App with Riak Fabric

services:

# deploy a Riak Fabric running in multiple locations
- type: io.cloudsoft.basho.RiakEnterpriseFabric
  name: Riak Fabric (multiple locations)
  id: riak-fabric
  brooklyn.config:
    cluster.initial.size: 3
    download.url.rhelcentos: http://YOUR_DOWNLOAD_URL.FOR_EXAMPLE.s3.amazonaws.com/private.downloads.basho.com/riak_ee/XXXXXX/2.0/2.0.5/rhel/6/riak-ee-2.0.5-1.el6.x86_64.rpm
    provisioning.properties:
      osFamily: centos
      osVersionRegex: 6\..*
      minCores: 4
      minRam: 8gb
      
  locations:
  # locations can also be specified per-service; our fabric will be in 3 geographies 
  - jclouds:aws-ec2:us-west-1:
      identity: YOUR_AWS_IDENTITY
      credential: YOUR_AWS_CREDENTIAL
  - jclouds:softlayer:ams01:
      identity: YOUR_SL_IDENTITY
      credential: YOUR_SL_CREDENTIAL
  - byon:
      # this syntax will install to a set of existing machines:
      # if user and privateKeyFile are left blank, it will use the localhost's
      user: YOUR_HOSTS_USERNAME
      privateKeyFile: ~/.ssh/YOUR_HOSTS_KEY
      hosts:
      - 192.168.0.15
      - 192.168.0.16
      - 192.168.0.17
      - 192.168.0.18
      
# we'll also deploy a web-app with an auto-scaler policy
- type: brooklyn.entity.webapp.ControlledDynamicWebAppCluster
  name: Web Cluster
  brooklyn.config:
    wars.root: https://s3-eu-west-1.amazonaws.com/brooklyn-clocker/brooklyn-example-hello-world-sql-webapp.war
    java.sysprops: 
      brooklyn.example.riak.nodes: $brooklyn:component("riak-fabric").attributeWhenReady("riak.cluster.nodeList")
      
  brooklyn.policies:
  - policyType: brooklyn.policy.autoscaling.AutoScalerPolicy
    brooklyn.config:
      metric: $brooklyn:sensor("brooklyn.entity.webapp.DynamicWebAppCluster", "webapp.reqs.perSec.windowed.perNode")
      metricLowerBound: 10
      metricUpperBound: 100
      minPoolSize: 1
      maxPoolSize: 5
      
  location:
  # our web app is just in CA
  - jclouds:aws-ec2:us-west-1:
      identity: YOUR_AWS_IDENTITY
      credential: YOUR_AWS_CREDENTIAL
```
