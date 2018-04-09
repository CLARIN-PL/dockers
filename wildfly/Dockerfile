FROM clarinpl/java
LABEL maintainer="Tomasz Naskręt, clarin-pl.eu" description="Java EE8 Full & Web Distribution"
ENV VERSION 12.0.0.Final
ENV INSTALL_DIR /opt
ENV WILDFLY_HOME ${INSTALL_DIR}/wildfly-${VERSION}
ENV DEPLOYMENT_DIR ${WILDFLY_HOME}/standalone/deployments/
ENV CONFIGURATION_DIR ${WILDFLY_HOME}/standalone/configuration
ENV WILDFLY_CLI $WILDFLY_HOME/bin/jboss-cli.sh
RUN useradd -b /opt -m -s /bin/sh -d ${INSTALL_DIR} serveradmin && echo serveradmin:serveradmin | chpasswd
RUN curl -O https://download.jboss.org/wildfly/${VERSION}/wildfly-${VERSION}.zip \
    && unzip wildfly-${VERSION}.zip -d ${INSTALL_DIR} \
    && rm wildfly-${VERSION}.zip \
    && chown -R serveradmin:serveradmin /opt \
    && chmod a+x ${WILDFLY_HOME}/bin/standalone.sh \
    && chmod -R a+rw ${INSTALL_DIR}
USER serveradmin
ENTRYPOINT ${WILDFLY_HOME}/bin/standalone.sh -c standalone-ee8.xml -b=0.0.0.0 -bmanagment=0.0.0.0
EXPOSE 8080 9990

