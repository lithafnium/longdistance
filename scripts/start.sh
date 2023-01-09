#!/bin/bash

set -Eeuo pipefail

if [ -z ${PORT+x} ];
then 
  PORT=8080
fi

npx snowpack dev --port $PORT
