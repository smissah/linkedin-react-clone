import React, { useEffect, useState } from "react";

import "../componentStyles/DarkModeButton/index.css";
import { useSelector, useDispatch } from "react-redux";

import { selectTheme, themeLight, themeDark } from "../../features/themeSlice";

const DarkModeButton = () => {
  const currentTheme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    if (currentTheme) {
      dispatch(themeDark());
      console.log(currentTheme);
    } else {
      dispatch(themeLight());
      console.log(currentTheme);
    }
  };

  return (
    <div className="darkModeButton">
      <button onClick={handleThemeChange}>{currentTheme ? "Off" : "On"}</button>
    </div>
  );
};

export default DarkModeButton;
