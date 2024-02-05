import React, { useEffect, useState } from "react";
import "./Comment.css";
import commentIcon from "../Icon/comment.svg";
import heartIcon from "../Icon/heart.svg";
import verifyIcon from "../Icon/verify.svg";
import unknowIcon from "../Icon/unknow.svg";
import ReplyButton from "./ReplyButton";
import ReplyButton1 from "./ReplyButton1";
import Reply2 from "./Reply2";

export default function Comment(props) {
  const [isVerify, setIsVerify] = useState(true);
  const [commentID, setCommentID] = useState(props.CommentID);

  return (
    <div className="commentbox">
      {props.hasVerify ? (
        <span className="topvarify">
          <img src={verifyIcon} alt="verify" className="verify" />
          {/* <span className="text">Answer Vilified</span> */}
        </span>
      ) : (
        <></>
      )}
      <div className="cCLV">
        <img src={commentIcon} alt="comment" className="comment" />
        <span className="text">{props.reply}</span>
        <img src={heartIcon} alt="heart" className="heart" />
        <span className="text">{props.LikeAmount}</span>
      </div>
      <div className="userdate">
        <img src={unknowIcon} className="profile" alt="profile" />
        <div>
          <p className="username">{props.displayName}</p>
          <span className="date">{props.CreateDate}</span>
        </div>
      </div>
      <p>{props.detail}</p>
      {props.isLogin() && <ReplyButton />}
    </div>
  );
}
