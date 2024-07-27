"use client";
// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Combine all your reducers

const store = configureStore({
  reducer: rootReducer,
  // Other middleware and configuration options can be passed here
});

export default store;
