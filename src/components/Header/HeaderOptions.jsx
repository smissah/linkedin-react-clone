import React from "react";
import { Avatar } from "@material-ui/core";
import "../componentStyles/HeaderOptions.css";
const HeaderOptions = ({ avatar, Icon, title }) => {
  console.log(avatar);
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className="headerOption__icon headerOption__avatar"
          src={avatar}
        />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
