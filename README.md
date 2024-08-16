
# Todo App

A simple Todo App built with React, allowing users to add, edit, delete, and filter tasks. The app persists the task data using the browser's Local Storage, so your tasks remain even after you close and reopen the browser.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Features](#features)
- [License](#license)

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. **Install Dependencies**
   Ensure you have Node.js and npm installed, then run:
   ```bash
   npm install
   ```

3. **Run the App**
   Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000/`.

## Usage

- **Add a Task:** Type a task into the input field and press `Enter` or click the "Add Task" button.
- **Edit a Task:** Click the "Edit" button next to a task. The task text will be moved to the input field for editing.
- **Delete a Task:** Click the "Delete" button next to a task to remove it.
- **Toggle Task Completion:** Click the checkbox next to a task to mark it as completed or pending.
- **Filter Tasks:** Use the filter buttons to view all tasks, completed tasks, or pending tasks.

## Components

### `App.jsx`

The main component that manages the state and renders the entire application. Key functionalities include:

- **State Management**: Handles the task list, input value, editing index, and filter status using React's `useState` and `useEffect`.
- **Local Storage**: Persists task data using the browser's Local Storage to ensure the tasks are saved across sessions.
- **Task Management**: Functions to add, edit, delete, and toggle the completion status of tasks.

### `TaskInput.jsx`

A component responsible for rendering the input field where users can type their tasks. It also handles adding a new task or editing an existing one when the user presses `Enter`.

### `FilterButtons.jsx`

A component that provides filter buttons to toggle between viewing all tasks, completed tasks, or pending tasks.

### `TaskItem.jsx`

A component that represents each individual task in the list. It includes buttons to edit, delete, and toggle the completion status of the task.

## Features

- **Persistent Data**: Task data is saved using Local Storage, allowing users to close and reopen the browser without losing their tasks.
- **Task Filtering**: Users can filter tasks based on their completion status (All, Completed, Pending).
- **Task Editing**: Users can easily edit existing tasks by clicking the "Edit" button.
- **Responsive Design**: The app layout adapts to different screen sizes.
