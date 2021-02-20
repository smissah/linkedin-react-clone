import React from "react";
import "../componentStyles/HeaderOptions.css";
const HeaderOptions = ({ icon, title }) => {
  return (
    <div className="headerOption">
      {icon && }
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
