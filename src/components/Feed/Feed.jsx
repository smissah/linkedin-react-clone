import React from "react";
import "../componentStyles/feedStyles/feedStyle.css";
import CreateIcon from "@material-ui/icons/Create";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Say something..." />
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feed;
