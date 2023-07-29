import { combineReducers } from "@reduxjs/toolkit";
import usersSlice from "./features/usersSlice";
import projectSlice from "./features/projectSlice";
import filterSlice from "./features/filterSlice";

const rootReducer = combineReducers({
  users: usersSlice,
  projects: projectSlice,
  filter: filterSlice,
});

export default rootReducer;
