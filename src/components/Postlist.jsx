import React, { useEffect, useState } from "react";
import "./Postlist.css";
import Postbox from "./Postbox";
import editIcon from "./Icon/editbig.svg";
import CreatePost from "./postsection/CreatePost";
import { Link } from "react-router-dom";
const PostList = (props) => {
  const [PostList, setPostList] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the distance from the bottom
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        (window.innerHeight + document.documentElement.scrollTop);

      // Define a threshold for triggering the fetch (adjust as needed)
      const threshold = 100;

      // Check if the user has reached the bottom of the page
      if (distanceFromBottom < threshold && !isFetching) {
        setIsFetching(true);
        console.log(1);
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

      <Postbox
        title="Postsamplewdfewgewrewggggg"
        taglist={["เนื้อหา 1", "เนื้อหา 2"]}
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        date="when"
        isVerify={false}
        comment="10"
        like="10"
        PID={1}
      />
      <Postbox
        title="อยากกินไก่จังนะครับ"
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail="โจทย์คือ อยากกินไก่จังนะครับยากมากเลยครับ"
        date="โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77"
        isVerify={true}
        comment="1000"
        like="10"
        PID={2}
      />
      <Postbox
        title="อยากกินไก่จังนะครับ"
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail="โจทย์คือ อยากกินไก่จังนะครับยากมากเลยครับ"
        date="โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77"
        isVerify={true}
        comment="1000"
        like="10"
        PID={2}
      />
      <Postbox
        title="อยากกินไก่จังนะครับ"
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail="โจทย์คือ อยากกินไก่จังนะครับยากมากเลยครับ"
        date="โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77"
        isVerify={true}
        comment="1000"
        like="10"
        PID={2}
      />
      <Postbox
        title="อยากกินไก่จังนะครับ"
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail="โจทย์คือ อยากกินไก่จังนะครับยากมากเลยครับ"
        date="โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77"
        isVerify={true}
        comment="1000"
        like="10"
        PID={2}
      />
      <Postbox
        title="อยากกินไก่จังนะครับ"
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail="โจทย์คือ อยากกินไก่จังนะครับยากมากเลยครับ"
        date="โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77"
        isVerify={true}
        comment="1000"
        like="10"
        PID={2}
      />
      <Postbox
        title="อยากกินไก่จังนะครับ"
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail="โจทย์คือ อยากกินไก่จังนะครับยากมากเลยครับ"
        date="โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77"
        isVerify={true}
        comment="1000"
        like="10"
        PID={2}
      />
      <Postbox
        title="อยากกินไก่จังนะครับ"
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail="โจทย์คือ อยากกินไก่จังนะครับยากมากเลยครับ"
        date="โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77"
        isVerify={true}
        comment="1000"
        like="10"
        PID={2}
      />
      <Postbox
        title="อยากกินไก่จังนะครับ"
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail="โจทย์คือ อยากกินไก่จังนะครับยากมากเลยครับ"
        date="โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77"
        isVerify={true}
        comment="1000"
        like="10"
        PID={2}
      />
      <Postbox
        title="อยากกินไก่จังนะครับ"
        taglist={["ไก่ย่าง", "เเล่นเกมที่บ้าน"]}
        detail="โจทย์คือ อยากกินไก่จังนะครับยากมากเลยครับ"
        date="โพสต์เมื่อ 9 : 40 | 15 Dec 22 by Username77"
        isVerify={true}
        comment="1000"
        like="10"
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
