// redux/persistStore.js

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore function

// Import your rootReducer that combines all your reducers
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root", // Key for the persisted state in local storage
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create and export the persisted store
export const configurePersistStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    // Optionally, you can enable the Redux DevTools Extension for debugging
    devTools: process.env.NODE_ENV !== "production",
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
