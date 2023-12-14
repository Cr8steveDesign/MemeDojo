// Bring in the needed functions from the redux toolkit and redux-persis packages

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import the reducers from the User Slice
import userReducer from "./user/userSlice.js";

// Create the combined reducer for when  you have multiple
// slices you want to combine

const rootReducer = combineReducers({ user: userReducer });

// Create configuration for the redux persist
const persistConfiguration = {
  key: "root",
  version: 1,
  storage,
};

//instantiate the persisted reducer
const persistedReducer = persistReducer(persistConfiguration, rootReducer);

// Configure the Redux Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// create a persistor instance to persist the redux store
export const persistor = persistStore(store);

// Now you need to wrap the app compnent with a provider
// and Persist Gate
// Go to the main.jsx
