import PostList from "../components/postlistsection/Postlist";
import ProfileBar from "../components/profilebar/Profilebar";
import axios from "axios";

import "./Mainpage.css";
import { useState } from "react";

function Homepage(props) {
  const [time,setTime] = useState(0)
  const getPageAPI = async (serverIP,page,PostList,setPostList) => {
    if (PostList.pop()===undefined) ;
    else setTime(PostList.pop().create_at)
    console.log("Check Postlist1", PostList);
    await axios
      .get(serverIP + "/pages?page=" + time)
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

  return (
    <div className="mainbody">
      <ProfileBar
        isLogin={props.isLogin}
        nowLogin={props.nowLogin}
        Logout={props.Logout}
        getName={props.getName}
      />
      
      <PostList isLogin={props.isLogin} getPageAPI={getPageAPI} />
    </div>
  );
}

export default Homepage;
