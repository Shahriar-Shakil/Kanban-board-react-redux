// redux/usersSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  users: [
    {
      id: "user1",
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: "user2",
      name: "Jane Smith",
      email: "jane@example.com",
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Reducer functions for handling actions related to users (if needed).

    addUser: (state, action) => {
      const { name, email } = action.payload;
      const newUser = {
        id: uuidv4(), // Generate a random unique ID
        name,
        email,
      };
      state.users.push(newUser);
    },
    removeUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
