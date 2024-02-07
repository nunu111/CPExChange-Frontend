import React, { useEffect, useState } from "react";
import "./Postlist.css";
import Postbox from "./Postbox";
import editIcon from "./Icon/editbig.svg";
import CreatePost from "./postsection/CreatePost";
import { Link } from "react-router-dom";
import axios from "axios";
import { IPconfig } from "./function/IPconfig";
const PostList = (props) => {
  const [PostList, setPostList] = useState([]);

  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const { getIP } = IPconfig();
  useEffect(() => {
    getPageAPI();
    console.log(PostList);
  }, []);

  const serverIP = getIP();

  const getPageAPI = async () => {
    console.log("Check Postlist1", PostList);
    await axios
      .get(serverIP + "/pages?page=" + page)
      .then((res) => {
        console.log("res", res.data);
        setPostList(PostList.concat(res.data));

        console.log("Check Postlist2", PostList);
      })
      .catch((err) => {
        console.error("Error:", err);
      });

    // window.scrollTo({
    //   top: document.documentElement.scrollTop - 80, // Adjust the value as needed
    //   behavior: "smooth", // Use 'auto' for instant scroll or 'smooth' for smooth scroll
    // });
  };

  useEffect(() => {
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
        getPageAPI();
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
  }, [isFetching]);

  return (
    <div className="Mainbox">
      {props.isLogin() && (
        <div>
          <Link to="/Create-Post" className="CreatePostButton">
            <img src={editIcon} className="icon" alt="edit" />
            <span className="text">เขียนโพสต์...</span>
          </Link>
        </div>
      )}
      <div className="Topicbox">
        <span className="Text">โพสต์ยอดฮิต</span>
        <span> / </span>
        <span className="Text"> โพสต์ล่าสุด</span>
      </div>
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
            bywho={Post.profileName}
            PID={Post.post_id}
            key={i}
          />
        );
      })}
      {/* <Postbox
        title={"อยากกินไก่จังนะครับ"}
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        date={"โพสต์เมื่อ 9 : 40 | 15 Dec 22"}
        isVerify={true}
        comment={1255}
        like={10}
        bywho={"Username77"}
        PID={2}
      />

      <Postbox
        title={"อยากกินไก่จังนะครับ"}
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        date={"โพสต์เมื่อ 9 : 40 | 15 Dec 22"}
        isVerify={true}
        comment={1255}
        like={10}
        bywho={"Username77"}
        PID={3}
      />
      <Postbox
        title={"อยากกินไก่จังนะครับ"}
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        date={"โพสต์เมื่อ 9 : 40 | 15 Dec 22"}
        isVerify={false}
        comment={1255}
        like={10}
        bywho={"Username77"}
        PID={4}
      /> */}

      {isFetching && <div className="loader"></div>}
      {/* <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/> */}
    </div>
  );
};

export default PostList;
