import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "../componentStyles/postsStyles/post.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import ChatIcon from "@material-ui/icons/Chat";
import InputOption from "../InputOption";

const Post = forwardRef(
  (
    {
      name = "unknown",
      message = "no message",
      description = "no description",
      photoUrl = "",
    },
    ref
  ) => {
    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={photoUrl}>{name?.[0].toLocaleUpperCase()}</Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post__body">
          <p className="post__message">{message}</p>

          <div className="post__buttons">
            <InputOption Icon={ThumbUpAltIcon} title="Like" color="grey" />
            <InputOption Icon={ChatIcon} title="Comment" color="grey" />
            <InputOption Icon={ShareIcon} title="Share" color="grey" />
            <InputOption Icon={SendIcon} title="Send" color="grey" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
