import React, { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import "../componentStyles/DarkModeButton/DarkModeButton.css";
import { useSelector, useDispatch } from "react-redux";

import { selectTheme, themeLight, themeDark } from "../../features/themeSlice";

const DarkModeButton = () => {
  const currentTheme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    if (currentTheme) {
      dispatch(themeDark());
      // console.log(currentTheme);
    } else {
      dispatch(themeLight());
      // console.log(currentTheme);
    }
  };

  return (
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round" onClick={handleThemeChange}>
        {currentTheme ? <IoMoon /> : <IoSunny />}
      </span>
    </label>
  );
};

export default DarkModeButton;
