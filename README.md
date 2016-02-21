---
---

AMP-Basho
===

The **AMP-Basho** software will automatically deploy and manage 
Basho Riak and Riak Enterprise clusters in a wide range of environments.

This uses [Apache Brooklyn](http://brooklyn.apache.org)'s easy-to-use YAML blueprinting approach,
combined with [Cloudsoft](http://cloudsoftcorp.com)'s enterprise-supported 
Application Management Platform (AMP).

Deploy a 5-node Riak EE cluster with the following blueprint:

```yaml
name: Riak Cluster

services:
- type: io.cloudsoft.basho.RiakEnterpriseCluster
  initialSize: 5
  download.url: YOUR_RIAK_EE_DOWNLOAD_URL

location:
  jclouds:aws-ec2:
    identity: YOUR_CLOUD_IDENTITY
    credential: YOUR_CLOUD_CREDENTIAL
```

See the [runtime docs](src/main/docs/README.md) for more information,
including examples for **Riak EE with a demo app** and **multi-cluster replication**. 


Interested? What Next?
---

* Download the latest [release](https://github.com/cloudsoft/amp-basho/releases) tarball and **get started**

* Browse runtime docs [online](src/main/docs/README.md): these are also included in the README in the release download

* Read [the source code docs](docs/) including how to build this project


License
---

AMP-Basho is built on [Cloudsoft AMP](http://www.cloudsoftcorp.com) and [Apache Brooklyn](http://brooklyn.io)
and is copyright &copy; 2016 by Cloudsoft Corporation and Basho.

This software is released under the terms of [the Cloudsoft EULA](LICENSE.txt).
