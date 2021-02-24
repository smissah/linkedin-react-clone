import { Info } from "@material-ui/icons";
import React from "react";
import "../componentStyles/widgetStyles/Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const Widget = () => {
  const newsLetters = (heading, subtitle) => {
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widets__articleRight">
        <h2>{heading}</h2>
        <p>{subtitle}</p>
      </div>
    </div>;
  };
  return (
    <div className="widget container">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsLetters("Is Redux dead?", "Find out why - 500 readers")}
    </div>
  );
};

export default Widget;
