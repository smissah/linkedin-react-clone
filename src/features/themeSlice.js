import { createSlice } from "@reduxjs/toolkit";
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: true,
  },

  reducers: {
    themeLight: (state, action) => {
      // state.theme = "light";
      state.theme = true;
    },
    themeDark: (state, action) => {
      state.theme = false;
      // state.theme = action.payload;
    },
  },
});

export const { themeLight, themeDark } = themeSlice.actions;

export const selectTheme = (state) => state.theme.theme;

export default themeSlice.reducer;
