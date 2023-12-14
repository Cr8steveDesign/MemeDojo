/*A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

// now create the slice for the user
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

// Export the actions created by the createSlice, as you'll be using it for dispatch
export const { signInSuccess, updateUserSuccess, deleteUserSuccess, signOut } =
  userSlice.actions;

//export the reducer functions as the default from this file
// You can import it as the userReducer for use when combining
// all your reducers inside the rootReducer
export default userSlice.reducer;
