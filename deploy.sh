#!/bin/bash

# Install required npm packages
npm install

# Update project
git checkout main
git pull

# Build project
npm run build

# Go to directory containing built app
cd dist

# Run app
node main.js
