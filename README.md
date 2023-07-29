# Kanban Board App

This project is a Kanban board application built with React DND (Drag and Drop) and Redux Toolkit. The app allows users to efficiently manage tasks and visualize work progress using a Kanban board layout.

## Features

- Drag and drop tasks between different lists representing different stages .
- Add tasks to any list with a title, description, and due date.
- Edit existing tasks to modify their title, description, or due date.
- Delete tasks from any list.
- Create users from the User page. By default, two demo users are already added to the app.

## Installation

1. Clone the repository:

### `git clone https://github.com/Shahriar-Shakil/Kanban-board-react-redux.git`

2. Change into the project directory:

### `cd Kanban-board-react-redux`

3. Install the dependencies:

### `npm install`

## Usage

1. Run the development server:

### `npm start`

2. Open your browser and go to http://localhost:3000 to access the Kanban board app.

## Live Demo

You can also try the live version of the Kanban board app by visiting the following link:

[https://kanban-board-react-redux.netlify.app/](https://kanban-board-react-redux.netlify.app/)

## Persistence

The Redux store is persisted to the local storage, which means that the app's state will be saved even after the page is refreshed. If any issues occur or if you want to start the app from its initial state, you can clear the local storage.

## Authentication

This app does not require authentication. Users can directly access the Kanban board and manage tasks without the need for login credentials.

## Acknowledgments

This project was created using Create React App and the following libraries:

- React DND (Drag and Drop) for managing the task movement on the Kanban board.
- Redux Toolkit for state management.
