#!/usr/bin/env bash -e

git fetch --tags

# create temp branch
git checkout -b release/temp_$(git rev-parse --short HEAD)

# Add changelog
./node_modules/.bin/conventional-changelog -p angular -i CHANGELOG.md -s
git add CHANGELOG.md