import { Info } from "@material-ui/icons";
import React from "react";
import "../componentStyles/widgetStyles/Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const Widget = () => {
  const newsLetters = (heading, subtitle) => {
    return (
      <div className="widget__article">
        <div className="widget__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widet__articleRight">
          <h2>{heading}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widget ">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsLetters("Is Redux dead?", "Find out why - 500 readers")}
    </div>
  );
};

export default Widget;
