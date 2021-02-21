import React, { useState, useEffect } from "react";
import "../componentStyles/feedStyles/feedStyle.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "../InputOption";
import Post from "../Posts/Post";
import { db } from "../../firebase";
import firebase from "firebase";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // realtime listener for database
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      )
    );
  }, []);
  //functions

  const handlePostSubmit = (e) => {
    e.preventDefault();
    console.log("sumit");
    //push to database
    db.collection("posts").add({
      name: "Stephen Missah",
      description: "this is a test",
      message: input,
      photoUrl: "",
      //using server timestamp keeps time the same regardless of lcation
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  //----------------
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={() => handlePostSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Create an awesome post"
            />
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
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />;
        })}
      </div>
    </div>
  );
};

export default Feed;
