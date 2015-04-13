---
---

AMP-Basho
===

The **AMP-Basho** software will automatically deploy and manage 
Basho Riak and Riak Enterprise clusters in a wide range of environments.
This uses [Apache Brooklyn](http://brooklyn.io)'s easy-to-use YAML blueprinting approach,
combined with [Cloudsoft](http://cloudsoftcorp.com)'s enterprise-supported 
Application Management Platform (AMP).

For instance, deploy a Riak EE cluster with a configured elastic appserver 
by posting the following YAML to Brooklyn:

```yaml
services:
- type: io.cloudsoft.basho.RiakEnterpriseCluster
  id: riak-cluster
  initialSize: 5
  brooklyn.config:
    download.url.rhelcentos: http://YOUR_DOWNLOAD_URL.FOR_EXAMPLE.s3.amazonaws.com/private.downloads.basho.com/riak_ee/YOUR_CODE/2.0/2.0.5/rhel/6/riak-ee-2.0.5-1.el6.x86_64.rpm
- type: brooklyn.entity.webapp.ControlledDynamicWebAppCluster
  initialSize: 3
  brooklyn.config:
    wars.root: https://s3-eu-west-1.amazonaws.com/brooklyn-clocker/brooklyn-example-hello-world-sql-webapp.war
    java.sysprops: 
      brooklyn.example.riak.nodes: $brooklyn:component("riak-cluster").attributeWhenReady("riak.cluster.nodeList")
location: jclouds:aws-ec2
```

More options, and info on configuring locations, is included in the [runtime docs](src/main/docs/README.md). 


Interested? What Next?
---

* Download the latest [release](https://github.com/cloudsoft/amp-basho/releases) tarball and get started

* Browse runtime docs [online](src/main/docs/README.md) (these are also included in the release download)

* Read [the source code docs](docs/building-from-source.md) including how to build this project


License
---

AMP-Basho is built on [Cloudsoft AMP](http://www.cloudsoftcorp.com) and [Apache Brooklyn](http://brooklyn.io)
and is copyright &copy; 2015 by Cloudsoft Corporation and Basho.

This software is released under the terms of [the Cloudsoft EULA](LICENSE.txt).
