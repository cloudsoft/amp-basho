---
---

AMP-Basho: Build Instructions
===


These instructions cover how to build the project.

For instructions on running -- deploying Riak EE blueprints -- 
see [the distro's README](../src/main/docs/README.md).


Building this Project
---

To build this project, with Java 7 and Maven 3 installed, simply run:

    mvn clean install
    
This will build and install a `...-dist.tar.gz` in `target/` which can be redistributed, 
expanded, and run anywhere where Java is installed to run AMP-Basho.

Instructions on running are included in the README in that tarball.


Release Build
---

For a release build, we want to include Cloudsoft AMP instead of Apache Brooklyn
and ensure the latest version of the docs are built.  
To do this you will require 
jekyll setup (as described [here](https://github.com/apache/brooklyn-docs/blob/master/README.md)) and 
Cloudsoft AMP available in your maven environment. 
Then:

    pushd src/main/docs ; rm -rf _site ; jekyll build ; popd
    mvn clean install -Pamp


Other Ways of Running
---

There are other ways of running this as well:

* **Dropins JAR**: The JAR which is built can be added to the `dropins` directory in Apache Brooklyn or Cloudsoft AMP,
  using the standard distributions of those software instead of the redistributable build here.
  This is advantageous when combining with other Java blueprints, including [Clocker](http://clocker.io).

* **OSGi**: The JAR which is built is an OSGi bundle; this can be referenced in YAML blueprints 
  added to the Brooklyn catalog in the usual Brooklyn way. And advantage of the OSGi approach
  is that new versions can be added dynamically with multiple versions run concurrently.

It is also an option to include a custom GUI with this project, 
suitable for a team to manage their deployments, including debugging,
or to stand up a custom GUI in front of this, consuming the REST API, 
suitable for a simplified multi-tenant front-end (a.k.a. an *easy deployment tool*).


License
---

AMP-Basho is built on [Cloudsoft AMP](http://www.cloudsoftcorp.com) and [Apache Brooklyn](http://brooklyn.io)
and is copyright &copy; 2016 by Cloudsoft Corporation and Basho.

This software is released under the terms of [the Cloudsoft EULA](../LICENSE.txt).
