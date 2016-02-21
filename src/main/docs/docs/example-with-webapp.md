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
    identity: YOUR_IDENTITY
    credential: YOUR_CREDENTIAL
    
services:
- type: io.cloudsoft.basho.RiakEnterpriseCluster
  name: Riak Cluster
  id: riak-cluster
  initialSize: 3
  download.url: YOUR_RIAK_EE_DOWNLOAD_URL
  brooklyn.config:
    riak.riakConf.additionalContent: |
      javascript.hook_pool_size = 3
      javascript.map_pool_size = 9

- type: brooklyn.entity.webapp.ControlledDynamicWebAppCluster
  name: Web Cluster
  brooklyn.config:
    wars.root: "http://search.maven.org/remotecontent?filepath=org/apache/brooklyn/example/brooklyn-example-hello-world-sql-webapp/0.8.0-incubating/brooklyn-example-hello-world-sql-webapp-0.8.0-incubating.war"
    java.sysprops: 
      brooklyn.example.riak.nodes: $brooklyn:component("riak-cluster").attributeWhenReady("riak.cluster.nodeList")
```
