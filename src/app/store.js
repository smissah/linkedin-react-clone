import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import themeReducer from "../features/themeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
