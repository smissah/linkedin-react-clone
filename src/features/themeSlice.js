import { createSlice } from "@reduxjs/toolkit";
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "light",
  },

  reducer: {
    themeLight: (state, action) => {
      // state.theme = "light";
      state.theme = action.payload;
    },
    themeDark: (state) => {
      // state.theme = "dark";
      state.theme = action.payload;
    },
  },
});

export const { themeLight, themeDark } = themeSlice.actions;

export const selectTheme = (state) => state.theme.currentTheme;

export default themeSlice.reducer;
