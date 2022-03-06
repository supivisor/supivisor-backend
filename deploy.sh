#!/bin/bash

# Update project
git checkout main
git pull

# Install required npm packages
npm install

# Build project
npm run build

# Go to directory containing built app
cd dist

# Run app
node main.js
