import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    // user: null,
    user: {
      email: null,
      uid: null,
      displayName: null,
      photoURL: "",
      // profileUrl: null,
    },
  },
  reducers: {
    //reducers - functions that allow us to manipulate the state
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// /selectors - used to pull the out data into other components
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
