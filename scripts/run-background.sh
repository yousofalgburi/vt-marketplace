#!/bin/bash
# This script is used to run the application
# Launch the backend
echo "Launching the backend"
cd backend
npm install
npm run dev &
cd ..
# Launch the frontend
echo "Launching the frontend"
cd frontend
npm install
npm run dev &
cd ..

echo "Application is running"
echo "Backend: https://localhost:5000"
echo "Frontend: http://localhost:5173"
