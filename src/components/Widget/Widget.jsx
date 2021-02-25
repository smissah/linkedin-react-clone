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
        <div className="widget__articleRight">
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
      {newsLetters("Covid-X: UK updates", " - 66.6K readers")}
      {newsLetters("Falcon doors are back!", "Tesla - 77.4K readers")}
      {newsLetters("Redux is amazing", "Web Dev- 50K readers")}
      {newsLetters("Dogecoin - what is it?", "Crypto - 1K readers")}
      {newsLetters("Bill Gates is at it again", "Bill Gates - 10K readers")}
      {newsLetters("Need a creative designer?", "Find out more - 500 readers")}
      {newsLetters(
        "Why is Twitter axing Periscope?",
        "Find out why - 3.0K readers"
      )}
      {newsLetters(
        "Try new DarkMode for mobile users!",
        "Find out how - 5.56k readers"
      )}
    </div>
  );
};

export default Widget;
