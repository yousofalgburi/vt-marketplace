#!/bin/bash
# This script is used to run the Backend in the foreground
echo "Launching the backend"
cd backend
npm install
npm run dev
