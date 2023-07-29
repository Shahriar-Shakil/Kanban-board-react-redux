// redux/projectsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: [], // The initial array of projects. Add projects as needed in the format mentioned before.
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        // Reducer functions for handling actions related to projects (if needed).
        // You can add actions to add/edit/delete projects here.
    },
});

export const {
    /* Add action creators here if needed */
} = projectsSlice.actions;
export default projectsSlice.reducer;
