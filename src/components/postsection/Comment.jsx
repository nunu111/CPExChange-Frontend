import React, { useEffect, useState } from "react";
import "./Comment.css";
import commentIcon from "../Icon/comment.svg";
import heartIcon from "../Icon/heart.svg";
import verifyIcon from "../Icon/verify.svg";
import unknowIcon from "../Icon/unknow.svg";
export default function Comment() {
  const [isVerify, setIsVerify] = useState(true);

  const [commentsection, setCommentsection] = useState({
    username: "",
    title: "",
    detail: "",
    date: "",
    tag: [],
    isVerify: true,
    like: 0,
    reply: 0,
  });

  const commentAPI = () => {
    setCommentsection({
      ...commentsection,
      username: "username",
      title: "title",
      date: " 9 : 40 | 15 Dec 22",
      detail: "กินไก่กุ๊กๆ",
      tag: ["ไก่ย่าง", "เล่นเกมที่บ้าน"],
    });
  };
  useEffect(() => {
    commentAPI();
  }, []);

  return (
    <div className="commentbox">
      {commentsection.isVerify ? (
        <span className="topvarify">
          <img src={verifyIcon} alt="verify" className="verify" />
          {/* <span className="text">Answer Vilified</span> */}
        </span>
      ) : (
        <></>
      )}
      <div className="cCLV">
        <img src={commentIcon} alt="comment" className="comment" />
        <span className="text">{commentsection.reply}</span>
        <img src={heartIcon} alt="heart" className="heart" />
        <span className="text">{commentsection.like}</span>
      </div>
      <div className="userdate">
        <img src={unknowIcon} className="profile" alt="profile" />
        <div>
          <p className="username">{commentsection.username}</p>
          <span className="date">{commentsection.date}</span>
        </div>
      </div>
      <p>{commentsection.detail}</p>
    </div>
  );
}
