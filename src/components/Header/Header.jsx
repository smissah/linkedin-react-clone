import React from "react";
import "../componentStyles/Header.css";
// import SearchIcon from "@material-ui/icons/Search";

import "font-awesome/css/font-awesome.min.css";
import HeaderOptions from "./HeaderOptions";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1613845370~hmac=8c2c7fc5c552316b377039a90399a263"
            alt=""
          />

          <div className="header__search">
            <i className="fa fa-search"></i>
            <input
              type="text"
              name="headerSearch"
              id="headerSearch"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="header__right">
          <HeaderOptions Icon={<i class="fas fa-home"></i>} title="title" />
          <HeaderOptions Icon="" title="title" />
        </div>
      </div>
    </div>
  );
};

export default Header;
