#!/bin/bash

#   prepare dist folder
rm -rf  dist
mkdir dist
cp -rf ./src/** ./dist

# process dist folder

node ./scripts/update-build-date.js