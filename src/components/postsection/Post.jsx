import React, { useEffect, useState } from "react";
import "../Postlist.css";
import pinIcon from "../Icon/pin.svg";
import { Link, useParams } from "react-router-dom";
import heartIcon from "../Icon/heart.svg";
import PostTag from "../posttag";
import Comment from "./Comment";
import "./Comment.css";
import Postfunc from "../function/Postfunc";
export default function Post(props) {
  const { PostListAPI, PostAPI, getPostdetail, UpdatePost } = Postfunc();
  const params = useParams();
  const PID = params.PID;
  const [Tags, setTag] = useState(["ไก่ย่าง", "เล่นเกมที่บ้าน"]);
  const [postsection, setPostsection] = useState({
    title: "",
    detail: "",
    date: "",
    tag: [],
  });

  useEffect(() => {
    const inni = getPostdetail();
    setPostsection({ ...postsection, title: inni });
    console.log("pass1", getPostdetail());
    console.log("pass2", postsection);
  }, []);

  return (
    <div className="Mainbox">
      <Link to="/" className="goback">
        {"< ย้อนกลับ"}
      </Link>

      <div className="Postbox">
        <div className="Title">
          {postsection.title}Post{PID}
        </div>
        <div className="top">
          <img
            src={heartIcon}
            alt="heart"
            className="like"
            onClick={() => {
              console.log(postsection);
            }}
          />
          <span className="text">{10}</span>
          <img src={pinIcon} alt="pin" className="bookmark" />
        </div>
        <p className="date">
          {postsection.date}โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77
        </p>
        <hr />
        {Tags.map((Tag, i) => {
          return <PostTag TagName={Tag} key={i} />;
        })}
        <br />
        <div className="detail">{postsection.detail}</div>

        <div className="commmentsection">
          <p className="ctitle">Comment section</p>
          <hr className="chr" />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
}
