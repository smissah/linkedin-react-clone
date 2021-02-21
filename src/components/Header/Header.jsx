import React from "react";
import "../componentStyles/headerStyles/Header.css";
// import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";

import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SmsIcon from "@material-ui/icons/Sms";
import "font-awesome/css/font-awesome.min.css";
import HeaderOptions from "./HeaderOptions";
const Header = () => {
  const optionsGen = (icon, name) => {
    return <HeaderOptions Icon={icon} title={name} />;
  };
  const optionsList = [
    { graphic: HomeIcon, title: "Home" },
    { graphic: SupervisorAccountIcon, title: "Network" },
    { graphic: BusinessCenterIcon, title: "Jobs" },
    { graphic: SmsIcon, title: "Messages" },
    { graphic: NotificationsIcon, title: "Notifications" },
    {
      avatar: `https://media-exp1.licdn.com/dms/image/C4D03AQETSoajSCyVxg/profile-displayphoto-shrink_800_800/0/1540835089503?e=1619049600&v=beta&t=faEVJeqaRkkn6o2jFDnxNXwX3mtPNZkt8MHri9Xecbo`,
      title: "me",
    },
  ];

  return (
    <div className="header">
      <div className="container">
        <div className="header__left">
          {/* <img
            src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1613845370~hmac=8c2c7fc5c552316b377039a90399a263"
            alt=""
          /> */}
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
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
          {/* <HeaderOptions Icon={HomeIcon} title="Home" />
          <HeaderOptions Icon={SupervisorAccountIcon} title="Network" /> */}

          {optionsList.map(({ title, graphic, avatar }) => {
            {
              /* console.log(option); */
            }
            return (
              <HeaderOptions
                key={title}
                Icon={graphic}
                title={title}
                avatar={avatar}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
