#!/usr/bin/jjs -fv
var cmd = "docker build -t clarinpl/wildfly-mysql ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);