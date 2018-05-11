FROM ubuntu:16.04
MAINTAINER Tomasz Naskręt, tomasz.naskret@pwr.edu.pl

# Install Java.

RUN apt-get update && apt-get upgrade -y && apt-get -y install software-properties-common python-software-properties xmlstarlet bsdtar unzip curl netcat

RUN \
  echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
  add-apt-repository -y ppa:webupd8team/java && \
  apt-get update && \
  apt-get install -y oracle-java8-installer && \
  rm -rf /var/lib/apt/lists/* && \
  rm -rf /var/cache/oracle-jdk8-installer


# Define working directory.
WORKDIR /data

# Define commonly used JAVA_HOME variable
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle

# Define defaault command.
CMD ["bash"]
