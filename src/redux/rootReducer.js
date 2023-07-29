import { combineReducers } from "@reduxjs/toolkit";
import usersSlice from "./features/usersSlice";
import projectSlice from "./features/projectSlice";

const rootReducer = combineReducers({
  users: usersSlice,
  projects: projectSlice,
});

export default rootReducer;
