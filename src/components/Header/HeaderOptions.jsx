import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { Avatar } from "@material-ui/core";
import { auth } from "../../firebase";

import "../componentStyles/headerStyles/HeaderOptions.css";
const HeaderOptions = ({ avatar, Icon, title }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSignOut = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className="headerOption__icon headerOption__avatar"
          src={user?.photoUrl} //!optional chaining
          onClick={handleSignOut}
        />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
