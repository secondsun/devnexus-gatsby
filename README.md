# DevNexus Gatsby

This project is the gatsby powered devnexus site to be used for the 2023 conference onward.

# Development
## Prerequisites
To run the project you need node.js installed with NPM, make, python3, gcc, and g++. These are available on most operating systems.
## Coding
```
npm run develop
```

### Json Data
Json Data is sourced from sessionize and placed into the `/src/content` directory

## Release
The prototype branch is wired into a CI/CD sytem powered by Cloud Cannon.

# Site Layout

## Speakers Page
The Speakers page loads data from `/src/content/speakers.json` and uses the sessionize speakers json endpoint (ex. https://sessionize.com/api/v2/cbm0wqt9/view/Speakers)

URLs follow the pattern `/speakers` for all speakers and `/speakers/${id}` for individual bios

## Session Page

