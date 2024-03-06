import React, { useEffect, useState } from "react";
import "./Postlist.css";
import Postbox from "./Postbox";
import editIcon from "../Icon/editbig.svg";
import CreatePost from "../postsection/CreatePost";
import { Link,useLocation } from "react-router-dom";
import axios from "axios";
import { IPconfig } from "../function/IPconfig";
import Tag from "../postsection/Tag";
const PostList = (props) => {
  const [PostList, setPostList] = useState([]);

  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const { getIP } = IPconfig();
  const location = useLocation();
  const [selectedTags, setSelectedTags] = useState([]);
  const handleTagSelect = (tagName) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tagName)
        ? prevSelectedTags.filter((tag) => tag !== tagName)
        : [...prevSelectedTags, tagName]
    );
  };
  const [taglist, setTaglist] = useState([
    "Cal1",
    "Vector",
    "Derivatives of functions of one variable",
    "Indefinite integral",
    "Definite integral",

    "Cal2",
    "First order differential equations",
    "Second order linear differential equations with constant coefficients",
    "Functions of several variables and partial derivatives",
    "Graphs in two and three – dimensional space",
    "Multiple integrals",

    "Cal3",
    "Vector calculus",
    "Functions of complex variable",
    "Infinite series",
    "Fourier series",
  ]);

  useEffect(() => {
    props.getPageAPI(serverIP, page, PostList, setPostList,selectedTags);
    console.log(PostList);
  }, []);

  const serverIP = getIP();

  useEffect(() => {
    if(!props.isNoMorePost) {
    const handleScroll = () => {
      // Calculate the distance from the bottom
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        (window.innerHeight + document.documentElement.scrollTop);
      // Define a threshold for triggering the fetch (adjust as needed)
      const threshold = 1000;
      // Check if the user has reached the bottom of the page
      if (distanceFromBottom < threshold && !isFetching) {
        setIsFetching(true);
        console.log(page);
        setPage(page + 1);
        props.getPageAPI(serverIP, page+1, PostList, setPostList);
        // getPageAPI();
        // Simulate fetching more data (replace with your actual fetching logic)
        // For demonstration purposes, we're using a setTimeout here
        setTimeout(() => {
          // Your data fetching logic goes here

          // Set isFetching back to false after fetching is complete
          setIsFetching(false);
        }, 1000); // Adjust the delay as needed
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
  }, [isFetching]);

  return (
    <div className="Mainbox">
      {props.isLogin() && location.pathname === "/" && (
        <div>
          <Link to="/Create-Post" className="CreatePostButton">
            <img src={editIcon} className="icon" alt="edit" />
            <span className="text">เขียนโพสต์...</span>
          </Link>
        </div>
      )}
      {
        location.pathname === "/tag" && taglist.map((name, i) => {
          return (
            <Tag
              tagname={name}
              key={i}
              selectedTags={selectedTags}
              onTagSelect={handleTagSelect}
            />
          );
        })
      }

      { location.pathname === "/" &&
      <div className="Topicbox">
        <span className="Text">โพสต์ยอดฮิต</span>
        <span> / </span>
        <span className="Text"> โพสต์ล่าสุด</span>
      </div>
      }
      {PostList.map((Post, i) => {
        const taglist = Array.isArray(Post.taglist) ? Post.taglist : [];
        return (
          <Postbox
            title={Post.topic}
            taglist={taglist}
            detail={Post.detail}
            date={Post.create_at}
            isVerify={Post.has_verify}
            comment={Post.commentCount}
            like={Post.like_count}
            displayname={Post.profile_name}
            PID={Post.id}
            history ={location.pathname}
            is_like = {Post.is_like}
            key={i}
          />
        );
      })}

      {!props.isNoMorePost && isFetching && <div className="loader"></div>}
    </div>
  );
};

export default PostList;
