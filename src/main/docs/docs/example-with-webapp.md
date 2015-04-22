---
---

# Example: Web App with Riak Cluster

AMP-Basho can be used to deploy [any Brooklyn blueprint](http://brooklyn.io/learnmore/blueprint-tour.html)
composed together with the Riak and Riak EE blueprints.

This example shows a Riak cluster together with a web cluster running a chat application,
using the sensors from the Riak node to configure the web cluster automatically to consume
this Riak back-end.
 

```
name: Web App with Riak Cluster

location:
  jclouds:aws-ec2:
    region: us-east-1
    osFamily: centos
    osVersionRegex: 6\..*
    identity: YOUR_IDENTITY
    credential: YOUR_CREDENTIAL
    
services:
- type: io.cloudsoft.basho.RiakEnterpriseCluster
  name: Riak Cluster
  id: riak-cluster
  initialSize: 3
  brooklyn.config:
    download.url.rhelcentos: http://YOUR_DOWNLOAD_URL.FOR_EXAMPLE.s3.amazonaws.com/private.downloads.basho.com/riak_ee/YOUR_CODE/2.0/2.0.5/rhel/6/riak-ee-2.0.5-1.el6.x86_64.rpm
    riak.riakConf.additionalContent: |
      javascript.hook_pool_size = 3
      javascript.map_pool_size = 9
- type: brooklyn.entity.webapp.ControlledDynamicWebAppCluster
  name: Web Cluster
  brooklyn.config:
    wars.root: https://s3-eu-west-1.amazonaws.com/brooklyn-clocker/brooklyn-example-hello-world-sql-webapp.war
    java.sysprops: 
      brooklyn.example.riak.nodes: $brooklyn:component("riak-cluster").attributeWhenReady("riak.cluster.nodeList")
```
