# Github action playground

# Description

This repo contains an implementation of simple Github action to build and publish a web app on Github Pages

## Preview App

[GH-Page - Demo link](https://mdibenedetto.github.io/github-actions-playground)

## Actions

### Path: `.github/workflows`

- `main.yaml` action prints all github repo attributes
- `publish-gh-pages.yaml` action execute a serie of steps to builld a source folder and publish it to Github pages

## Scripts

- `build.sh` run all command to build the app
- `update-build-date` parse the file `index.html` and update the label which contains latest date
