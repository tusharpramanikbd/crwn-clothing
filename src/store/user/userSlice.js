import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user", // This name property genarate namespace as well as action types, that previously created manually
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload; // Even though this looks like state object mutation, but behind the scene, redux toolkit uses a library named Immer, which creates immutable state by mutating the current one
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
