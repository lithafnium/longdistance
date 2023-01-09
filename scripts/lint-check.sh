#!/bin/bash

set -Eeuo pipefail

npx eslint --max-warnings 0 "src/**/*.ts*"