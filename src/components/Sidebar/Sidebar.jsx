import React from "react";
import "../componentStyles/sidebarStyles/sidebar.css";
import { Avatar } from "@material-ui/core";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://cdn.dribbble.com/users/418188/screenshots/6005129/information_architecture_illustration_tubik.png"
          alt=""
          className="sidebar__banner"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Stephen Missah</h2>
        <h4>email here</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2.3K</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">2.3K</p>
        </div>
      </div>
      <div className="sidebar__btn">
        <p>recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
