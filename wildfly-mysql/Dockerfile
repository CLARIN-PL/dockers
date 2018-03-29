FROM clarinpl/wildfly
LABEL maintainer="Tomasz Naskręt, clarin-pl.eu" description="WildFly with MySql Drivers"

ADD customization ${WILDFLY_HOME}/customization/

CMD ["${WILDFLY_HOME}/customization/execute.sh"]



