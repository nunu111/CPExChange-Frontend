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
import CommentButton from "./CommentButton";
export default function Post(props) {
  const { PostListAPI, PostAPI, getPostdetail, UpdatePost } = Postfunc();
  const params = useParams();
  const PID = params.PID;
  const { getIP } = IPconfig();
  const [postsection, setPostsection] = useState({
    topic: "",
    detail: "",
    create_at: "",
    taglist: [],
    like_count: 0,
  });

  const [isLiked, setIsLiked] = useState(false);
  const [commentsection, setCommentsection] = useState([]);

  const serVerifyTopic = () => {
    const sortedComments = [...commentsection].sort((a, b) => {
      // Sort in descending order based on hasVerify
      if (a.is_verify && !b.is_verify) {
        return -1; // a comes first
      } else if (!a.is_verify && b.is_verify) {
        return 1; // b comes first
      } else {
        return 0; // no change in order
      }
    });

    setCommentsection(sortedComments);
  };
  const getPostAPI = async () => {
    const serverIP = getIP();
    const resp = await axios
      .get(serverIP + "/posts?postId=" + PID)
      .then((res) => {
        console.log("resPost : ", res.data);
        setPostsection(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCommentAPI = async () => {
    const serverIP = getIP();
    await axios
      .get(serverIP + "/comments?commentId=" + PID)
      .then((res) => {
        console.log("resComment : ", res.data);
        setCommentsection(res.data);
      })
      .catch((err) => {
        console.log(err);
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
    getCommentAPI();
    setCommentsection(commentsection.sort(customSort));

    // serVerifyTopic();
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

  // Custom sorting function
  const customSort = (a, b) => {
    const targetProfileName = props.getName();
    if (a.profile_name === targetProfileName) return -1;
    if (b.profile_name === targetProfileName) return 1;
    return a.profile_name.localeCompare(b.profile_name);
  };

  // Sort the array using the custom sorting function

  return (
    <div className="Mainbox">
      <Link to="/" className="goback">
        {"< ย้อนกลับ"}
      </Link>

      <div className="Postbox">
        <div className="Title">{postsection.topic}</div>
        <div className="top">
          {isLiked ? (
            <img
              src={likedIcon}
              alt="Liked"
              className="like"
              onClick={() => {
                setIsLiked(!isLiked);
                postsection.like_count = Number(postsection.like_count) - 1;
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
                postsection.like_count = Number(postsection.like_count) + 1;
                setPostsection({ ...postsection });
              }}
            />
          )}
          <span className="text">{postsection.like_count}</span>
          <img src={pinIcon} alt="pin" className="bookmark" />
        </div>
        <p className="date">
          โพสต์เมื่อ {postsection.create_at} {postsection.postowner}
        </p>
        <hr />
        {/* {postsection.tag.map((Tag, i) => {
          return <PostTag TagName={Tag} key={i} />;
        })} */}
        <br />
        <div className="detail">{postsection.detail}</div>

        <div className="commmentsection">
          <p className="ctitle">Comment section</p>
          <hr className="chr" />
          {props.isLogin() && (
            <CommentButton
              PID={params.PID}
              setComment={getCommentAPI}
              getName={props.getName}
            />
          )}
          {commentsection.map((com, i) => {
            const reply = Array.isArray(com.reply) ? com.reply : [];
            return (
              <Comment
                CommentID={com.comment_id}
                displayName={com.profile_name}
                LikeAmount={com.like_count}
                hasVerify={com.is_verify}
                reply={reply}
                CreateDate={com.create_at}
                detail={com.detail}
                isLogin={props.isLogin}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
