---
---

AMP-Basho
===

The **AMP-Basho** software will automatically deploy and manage 
Basho Riak and Riak Enterprise clusters in a wide range of environments.
This uses [Apache Brooklyn](http://brooklyn.io)'s easy-to-use YAML blueprinting approach,
combined with [Cloudsoft](http://cloudsoftcorp.com)'s enterprise-supported 
Application Management Platform (AMP).

These instructions cover how to build the project.

For instructions on running -- deploying Riak EE blueprints -- see [the distro's README](src/main/assembly/files/README.md).


Building this Project
---

To build this project, with Java 7 and Maven 3 installed, simply run:

    mvn clean install assembly:single
    
This will build and install a `...-dist.tar.gz` in `target/` which can be redistributed, 
expanded, and run anywhere where Java is installed to run AMP-Basho.

Instructions on running are included in the README in that tarball.
 


Other Ways of Running
---

TODO: other ways of running:

* OSGi (WIP)
* dropins JAR

in deployment topologies:  this project can supply a custom GUI, suitable for a team to manage their deployments, including debugging,
or a custom GUI can be stood up in front of this consuming the REST API, suitable for a simplified multi-tenant front-end.


License
---

AMP-Basho is built on [Cloudsoft AMP](http://www.cloudsoftcorp.com) and [Apache Brooklyn](http://brooklyn.io)
and is copyright &copy; 2015 by Cloudsoft Corporation and Basho.

This software is released under the terms of [the Cloudsoft EULA](LICENSE.md).
