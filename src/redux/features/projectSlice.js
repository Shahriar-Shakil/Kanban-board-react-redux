// redux/projectsSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  projects: [], // The initial array of projects. Add projects as needed in the format mentioned before.
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      const newProject = {
        id: uuidv4(), // Generate a random unique ID for the new project
        ...action.payload,
      };
      state.projects.push(newProject);
    },
    editProject: (state, action) => {
      const { id, updates } = action.payload;
      const projectToEdit = state.projects.find((project) => project.id === id);
      if (projectToEdit) {
        Object.assign(projectToEdit, updates);
      }
    },
    deleteProject: (state, action) => {
      const projectId = action.payload;
      state.projects = state.projects.filter(
        (project) => project.id !== projectId
      );
    },
  },
});

export const { addProject, editProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;
