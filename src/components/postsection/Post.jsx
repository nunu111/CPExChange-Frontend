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
import likedIcon from "../Icon/liked.svg";
import { IPconfig } from "../function/IPconfig";
export default function Post(props) {
  const { PostListAPI, PostAPI, getPostdetail, UpdatePost } = Postfunc();
  const params = useParams();
  const PID = params.PID;
  const { getIP } = IPconfig();
  const [postsection, setPostsection] = useState({
    Topic: "",
    Detail: "",
    TimeStamp: "",
    tag: [],
    LikeCout: 0,
  });

  const [isLiked, setIsLiked] = useState(false);
  const [commentsection, setCommentsection] = useState([
    {
      CommentID: "",
      displayName: "",
      LikeAmount: 0,
      hasVerify: false,
      reply: [],
      CreateDate: "",
      detail: "",
    },
  ]);

  const getPostAPI = async () => {
    const serverIP = getIP();
    const resp = await axios
      .get(serverIP + "/posts?postId=" + PID)
      .then((res) => {
        console.log("resPost : ", res.data);
        setPostsection(res.data);
      })
      .catch((err) => {});

    // setPostsection({
    //   ...postsection,
    //   topic: "title",
    //   date: "โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77",
    //   detail:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   tag: ["ไก่ย่าง", "เล่นเกมที่บ้าน"],
    // });
  };

  const getCommentAPI = async () => {
    const serverIP = getIP();
    await axios.get(serverIP + "/posts/comment?postId=" + PID).then((res) => {
      setCommentsection(res.data);
    });
  };

  const LikeAPI = async () => {
    const serverIP = getIP();
    await axios
      .get(serverIP + "/posts/like?postId=" + PID)
      .then((res) => {
        setIsLiked(true);
      })
      .catch((err) => {});
  };

  const UnlikeAPI = async () => {
    const serverIP = getIP();
    await axios
      .get(serverIP + "/posts/unlike?postId=" + PID)
      .then((res) => {
        setIsLiked(false);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getPostAPI();
    // setPostsection({
    //   ...postsection,
    //   topic: "title",
    //   date: "9 : 40 | 15 Dec 22",
    //   postowner: "Username77",
    //   detail:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   tag: ["ไก่ย่าง", "เล่นเกมที่บ้าน"],
    // });
  }, []);

  return (
    <div className="Mainbox">
      <Link to="/" className="goback">
        {"< ย้อนกลับ"}
      </Link>

      <div className="Postbox">
        <div className="Title">{postsection.Topic}</div>
        <div className="top">
          {isLiked ? (
            <img
              src={likedIcon}
              alt="Liked"
              className="like"
              onClick={() => {
                setIsLiked(!isLiked);
                postsection.LikeCout = postsection.LikeCout - 1;
                setPostsection({ ...postsection });
              }}
            />
          ) : (
            <img
              src={heartIcon}
              alt="heart"
              className="like"
              onClick={() => {
                setIsLiked(!isLiked);
                postsection.LikeCout = postsection.LikeCout + 1;
                setPostsection({ ...postsection });
              }}
            />
          )}
          <span className="text">{postsection.LikeCout}</span>
          <img src={pinIcon} alt="pin" className="bookmark" />
        </div>
        <p className="date">
          โพสต์เมื่อ {postsection.TimeStamp} {postsection.postowner}
        </p>
        <hr />
        {/* {postsection.tag.map((Tag, i) => {
          return <PostTag TagName={Tag} key={i} />;
        })} */}
        <br />
        <div className="detail">{postsection.Detail}</div>

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
