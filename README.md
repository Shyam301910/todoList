# Todo List Application

This is a **MERN (MongoDB, Express, React, Node.js)** stack-based Todo List application. It allows users to manage their daily tasks by adding, marking as done, and deleting tasks.

## Features

- Add new tasks to the list.
- Mark tasks as completed.
- Delete tasks from the list.
- Responsive UI built with React and SCSS.
- Backend API built with Express and MongoDB for task management.

### Prerequisites

- Node.js (v16 or later)
- MongoDB (local or cloud instance)
- ES7+ React/Redux/React-Native snippets, VSCode React Refactor, npm Intellisense extensions from VS Code

### Backend Setup
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies
    ```bash
    npm init -y
    npm install express mongoose cors
    ```
3. Start the server
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the todolist directory
    ```bash
    cd todolist
    ```
2. Install dependecies:
    ```bash
    npm create vite@latest
    npm install
    npm install axios react-icons react-toastify
    ```
3. Start the application:
    ```bash
    npm run dev
    ```
