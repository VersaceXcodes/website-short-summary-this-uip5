#!/bin/bash
# Start backend server in background
cd /app/backend
npm start &

# Start frontend development server in background
cd /app/vitereact
npm run dev -- --host &

# Wait for both processes
wait
