FROM clarinpl/wildfly

# Maintainer
LABEL maintainer="Tomasz Naskręt, clarin-pl.eu" description="WildFly 12 with MySql Drivers"

ENV MYSQL_VERSION 6.0.6

# Configure Wildfly server
RUN echo "=> Starting WildFly server" && \
      bash -c '$WILDFLY_HOME/bin/standalone.sh -c standalone-ee8.xml &' && \
    echo "=> Waiting for the server to boot" && \
     sleep 6 && \
    echo "=> Downloading MySQL driver" && \
      curl --location --output /tmp/mysql-connector-java-${MYSQL_VERSION}.jar --url http://search.maven.org/remotecontent?filepath=mysql/mysql-connector-java/${MYSQL_VERSION}/mysql-connector-java-${MYSQL_VERSION}.jar && \
    echo "=> Adding MySQL module" && \
      $WILDFLY_CLI --connect --command="module add --name=com.mysql.driver --resources=/tmp/mysql-connector-java-${MYSQL_VERSION}.jar --dependencies=javax.api,javax.transaction.api" && \
    echo "=> Adding MySQL driver" && \
      $WILDFLY_CLI --connect --command="/subsystem=datasources/jdbc-driver=mysql:add(driver-name=mysql,driver-module-name=com.mysql.driver,driver-class-name=com.mysql.cj.jdbc.Driver)" && \
    echo "=> Shutting down WildFly and Cleaning up" && \
      $WILDFLY_CLI --connect --command=":shutdown" && \
      rm -rf $WILDFLY_HOME/standalone/configuration/standalone_xml_history/ $WILDFLY_HOME/standalone/log/* && \
      rm -f /tmp/*.jar

# Expose http and admin ports
EXPOSE 8080 9990

#echo "=> Restarting WildFly"
# Set the default command to run on boot
# This will boot WildFly in the standalone mode and bind to all interfaces
ENTRYPOINT ${WILDFLY_HOME}/bin/standalone.sh -c standalone-ee8.xml -b=0.0.0.0 -bmanagment=0.0.0.0
