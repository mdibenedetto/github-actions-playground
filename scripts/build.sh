#!/bin/bash

#   prepare dist folder
rm -rf  dist
mkdir dist
cp ./src/index.html ./dist

# process dist folder

node ./scripts/update-build-date.js