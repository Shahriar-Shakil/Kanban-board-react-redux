// redux/filterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignedTo: null, // Holds the user ID for filtering by assignment
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setAssignedTo: (state, action) => {
      state.assignedTo = action.payload;
    },
    clearFilters: (state) => {
      state.assignedTo = null;
    },
  },
});

export const { setAssignedTo, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
