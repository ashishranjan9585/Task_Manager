# Task Management Application

This project is a simple Task Management Application built with the MERN (MongoDB, Express, React, Node.js) stack. It allows users to create, read, update, and delete tasks with user authentication using JWT (JSON Web Token).

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Commands](#commands)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- User Authentication (Register, Login)
- JWT Token Verification
- Create, Read, Update, Delete (CRUD) tasks
- Responsive design using Tailwind CSS
- Protected routes for authenticated users

## Technologies

- MongoDB
- Express.js
- React.js
- Node.js
- Tailwind CSS
- JWT (JSON Web Token)
- bcryptjs

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/task-manager.git
    cd task-manager/backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI and JWT secret:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

### Commands

#### Backend Commands

- Start the backend server:
    ```bash
    npm start
    ```

- Run backend tests:
    ```bash
    npm test
    ```

#### Frontend Commands

- Start the frontend development server:
    ```bash
    npm start
    ```

- Build the frontend for production:
    ```bash
    npm run build
    ```

## Usage

### Register a New User

1. Open your browser and navigate to `http://localhost:3000/register`.
2. Fill out the registration form and submit.

### Login

1. Open your browser and navigate to `http://localhost:3000/login`.
2. Fill out the login form and submit.

### Manage Tasks

1. After logging in, you will be redirected to the task list page.
2. Add a new task by clicking on the "Add New Task" button.
3. View task details by clicking on a task title.
4. Edit or delete tasks using the corresponding buttons on the task details page.

## API Endpoints

### Auth Routes

- Register a new user: `POST /api/auth/register`
- Login user: `POST /api/auth/login`

### Task Routes (Protected)

- Get all tasks: `GET /api/tasks`
- Create a new task: `POST /api/tasks`
- Get a single task: `GET /api/tasks/:id`
- Update a task: `PUT /api/tasks/:id`
- Delete a task: `DELETE /api/tasks/:id`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
