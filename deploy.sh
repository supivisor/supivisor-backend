#!/bin/bash

# Install required npm packages
npm install

# Update project
git checkout main
git pull

# Build project
npm run build

# Copy built ap to a chosen directory outside the project
sudo cp -r dist /home/pi/Server/supivisor-backend/

# Enter the chosen directory
cd /home/pi/Server/supivisor-backend/

# Run app
node main.js
