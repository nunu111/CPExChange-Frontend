import React, { useEffect, useState } from "react";
import "../Postlist.css";
import pinIcon from "../Icon/pin.svg";
import { Link, useParams } from "react-router-dom";
import heartIcon from "../Icon/heart.svg";
import PostTag from "../posttag";
import Comment from "./Comment";
import "./Comment.css";
import Postfunc from "../function/Postfunc";
import axios from "axios";
export default function Post(props) {
  const { PostListAPI, PostAPI, getPostdetail, UpdatePost } = Postfunc();
  const params = useParams();
  const PID = params.PID;

  const [postsection, setPostsection] = useState({
    title: "",
    detail: "",
    date: "",
    tag: [],
    like: 0,
  });

  const getPostAPI = async () => {
    const serverIP = "http://192.168.116.101:8080";
    const resp = await axios
      .post(serverIP + "/posts?postId={post_id}", {
        postID: params.PID,
      })
      .then((res) => {})
      .catch((err) => {});

    setPostsection({
      ...postsection,
      title: "title",
      date: "โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tag: ["ไก่ย่าง", "เล่นเกมที่บ้าน"],
    });
  };

  useEffect(() => {
    getPostAPI();
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
          <span className="text">{postsection.like}</span>
          <img src={pinIcon} alt="pin" className="bookmark" />
        </div>
        <p className="date">{postsection.date}</p>
        <hr />
        {postsection.tag.map((Tag, i) => {
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
