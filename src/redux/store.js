import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/usersSlice";
import projectsReducer from "./features/projectSlice";
const store = configureStore({
  reducer: {
    users: usersReducer,
    projects: projectsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
