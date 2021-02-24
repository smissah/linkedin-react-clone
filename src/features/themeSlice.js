import { createSlice } from "@reduxjs/toolkit";
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "light",
  },

  reducer: {
    themeLight: (state) => {
      state.theme = "light";
    },
    themeDark: (state) => {
      state.theme = "dark";
    },
  },
});

export const { themeLight, themeDark } = themeSlice.actions;

export const selectTheme = (state) => state.theme.currentTheme;

export default themeSlice.reducer;
