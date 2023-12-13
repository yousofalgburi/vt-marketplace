#!/bin/bash
# This script is used to stop the application
echo "Stopping the backend"
kill $(lsof -t -i:5000)
echo "Stopping the frontend"
kill $(lsof -t -i:5173)
echo "Application is stopped"
