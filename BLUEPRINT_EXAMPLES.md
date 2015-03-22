# Blueprint Examples

* single-node riak in AWS
* single-node riak EE in AWS
* cluster Riak OSS in SL + webapp
* cluster RiakEE w MDC between SL+AWS + webapp

location configuration using ~/.brooklyn/brooklyn.properties file:
```
brooklyn.location.named.aws-centos5_9=jclouds:aws-ec2:us-east-1
brooklyn.location.named.aws-centos5_9.privateKeyFile=~/.ssh/id_somekey
brooklyn.location.named.aws-centos5_9.imageId=us-east-1/ami-e4bffe8d
brooklyn.location.named.aws-centos5_9.loginUser=root
brooklyn.location.named.aws-centos5_9.hardwareId=m1.small

brooklyn.location.jclouds.softlayer.identity=identity_name
brooklyn.location.jclouds.softlayer.credential=identity_key
brooklyn.location.named.SoftlayerAmsterdam=jclouds:softlayer
brooklyn.location.named.SoftlayerAmsterdam.region=ams01
brooklyn.location.named.SoftlayerAmsterdam.osFamily=CentOS
```
[more information about locations](https://brooklyn.incubator.apache.org/v/latest/ops/locations/)

## single-node riak in AWS

```yaml
name: Riak AWS Centos 5.9
location: aws-centos5_9
services:
- type: brooklyn.entity.nosql.riak.RiakNode
```

## single-node riak EE in AWS

```yaml
name: Riak Enterprise Node
location: aws-centos5_9
services:
- type: io.cloudsoft.basho.RiakEnterpriseNode
  brooklyn.config:
    download.url.rhelcentos: http://riak_official/riak.rpm
```

## cluster Riak OSS in SL + webapp

```yaml
name: Cluster Riak in SL + webapp
location: Softlayer1
services:
- type: brooklyn.entity.nosql.riak.RiakCluster
  initialSize: 2
  id: cluster
- type: brooklyn.entity.webapp.jboss.JBoss7Server
  name: Web
  brooklyn.config:
    wars.root: "https://s3-eu-west-1.amazonaws.com/brooklyn-clocker/brooklyn-example-hello-world-sql-webapp.war"
    java.sysprops:
      brooklyn.example.riak.nodes: $brooklyn:component("cluster").attributeWhenReady("riak.cluster.nodeList")
  provisioning.properties:
    osFamily: CentOS
```

## cluster RiakEE w MDC between SL+AWS + webapp

```yaml
name: Riak Fabric
locations: [softlayer:ams01, softlayer:lon02]
services:
- type: io.cloudsoft.basho.RiakEnterpriseFabric
  brooklyn.config:
    cluster.initial.size: 3
    download.url.rhelcentos: http://official_url/riak_ee.rpm
    provisioning.properties:
      osFamily: centos
      minCores: 2
      minRam: 2000
- type: brooklyn.entity.webapp.jboss.JBoss7Server
  name: Web
  brooklyn.config:
    wars.root: "https://s3-eu-west-1.amazonaws.com/brooklyn-clocker/brooklyn-example-hello-world-sql-webapp.war"
    java.sysprops:
      brooklyn.example.riak.nodes: $brooklyn:component("cluster").attributeWhenReady("riak.cluster.nodeList")
- type: brooklyn.entity.webapp.jboss.JBoss7Server
  name: Web
  brooklyn.config:
    wars.root: "https://s3-eu-west-1.amazonaws.com/brooklyn-clocker/brooklyn-example-hello-world-sql-webapp.war"
    java.sysprops:
      brooklyn.example.riak.nodes: $brooklyn:component("cluster").attributeWhenReady("riak.cluster.nodeList")
```