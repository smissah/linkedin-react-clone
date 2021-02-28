import React from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import "../componentStyles/DarkModeButton/DarkModeButton.css";
import { useSelector, useDispatch } from "react-redux";

import { selectTheme, themeLight, themeDark } from "../../features/themeSlice";

const DarkModeButton = () => {
  const currentTheme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const body = document.querySelector("body");
  const handleThemeChange = () => {
    if (currentTheme) {
      body.classList.add(".dark");
      dispatch(themeDark());
    } else {
      body.classList.remove(".dark");
      dispatch(themeLight());
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
