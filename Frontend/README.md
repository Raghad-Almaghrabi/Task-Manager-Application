# Task Manager - Frontend

A React frontend for the Task Manager application that connects to the Express backend API.

## Tech Stack
- React
- Axios

## Setup Instructions
1. Clone the repo
2. `cd frontend`
3. `npm install`
4. `npm start`
5. Open `http://localhost:3001` in your browser

> Make sure the backend server is running on port 3000 before starting the frontend.

## Features
- View all tasks
- Add a new task
- Edit an existing task
- Delete a task


## Project Structure
```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TaskList.js
│   │   └── TaskForm.js
│   ├── services/
│   │   └── taskService.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```
