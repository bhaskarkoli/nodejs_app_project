#!/bin/bash
sed "s/tagVersion/$1/g" deploymentservice.yml > node-app-deploymentservice.yml
