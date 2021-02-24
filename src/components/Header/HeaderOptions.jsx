import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { Avatar } from "@material-ui/core";
import "../componentStyles/headerStyles/HeaderOptions.css";
const HeaderOptions = ({ avatar, Icon, title }) => {
  const dispatch = useDispatch();
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className="headerOption__icon headerOption__avatar"
          src={avatar}
          onClick={() => dispatch(logout())}
        />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
