import React, { useEffect, useState } from "react";
import "./Postlist.css";
import Postbox from "./Postbox";
import editIcon from "./Icon/editbig.svg";
import CreatePost from "./postsection/CreatePost";
import { Link } from "react-router-dom";
import axios from "axios";
const PostList = (props) => {
  const [PostList, setPostList] = useState([
    {
      Topic: "Post test",
      taglist: ["เนื้อหา 1", "เนื้อหา 2"],
      Detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      TimeStamp: "when",
      postOwner: "Username77",
      hasVerify: false,
      Comment: 10,
      LikeCount: 10,
      postID: 1,
    },
  ]);

  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPageAPI();

    console.log(PostList);
  }, []);

  const serverIP = "http://192.168.116.101:8080";

  const getPageAPI = async () => {
    const resp = await axios
      .get(serverIP + "/pages?page=" + page)
      .then((res) => {
        console.log("res", res.data);

        const test = res.data[0];
        test.taglist = [];

        const testz = res.data[1];
        testz.taglist = [];
        setPostList([...PostList, test, testz]);
      })
      .catch((err) => {
        console.error("Error:", err);
      });

    // setPostList([
    //   ...PostList,
    //   {
    //     Topic: "อยากกินไก่จังนะครับ",
    //     taglist: ["ไก่ย่าง", "เเล่นเกมที่บ้าน"],
    //     Detail:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     TimeStamp: "โพสต์เมื่อ 9 : 40 | 15 Dec 22",
    //     postOwner: "Username77",
    //     hasVerify: true,
    //     Comment: 25,
    //     LikeCount: 1000,
    //     postID: 2,
    //   },
    // ]);
    window.scrollTo({
      top: document.documentElement.scrollTop - 60, // Adjust the value as needed
      behavior: "smooth", // Use 'auto' for instant scroll or 'smooth' for smooth scroll
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the distance from the bottom
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        (window.innerHeight + document.documentElement.scrollTop);
      // Define a threshold for triggering the fetch (adjust as needed)
      const threshold = 300;
      // Check if the user has reached the bottom of the page
      if (distanceFromBottom < threshold && !isFetching) {
        setIsFetching(true);
        console.log(1);
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
        return (
          <Postbox
            title={Post.Topic}
            taglist={Post.taglist}
            detail={Post.Detail}
            date={Post.TimeStamp}
            isVerify={Post.hasVerify}
            comment={Post.Comment}
            like={Post.LikeCount}
            bywho={Post.postOwner}
            PID={Post.postID}
            key={i}
          />
        );
      })}
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
        PID={2}
      />
      {isFetching && <p>Loading more data...</p>}
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
