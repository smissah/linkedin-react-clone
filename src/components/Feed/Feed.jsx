import React, { useState } from "react";
import "../componentStyles/feedStyles/feedStyle.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "../InputOption";
import Post from "../Posts/Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Create an awesome post" />
            <button type="submit"></button>
          </form>
        </div>
        <div className="feed_inputOptions">
          {/* input options */}
          <InputOption title="Image" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#7FC15E" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#E7A33E" />
          <InputOption
            title="Article"
            Icon={CalendarViewDayIcon}
            color="#C0CBCD"
          />
        </div>
      </div>

      <div className="feed__posts">
        {posts.map((post, index) => {
          <Post key={index} name="stephen missah" />;
        })}
      </div>
    </div>
  );
};

export default Feed;
