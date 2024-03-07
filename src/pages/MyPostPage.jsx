import ProfileBar from "../components/profilebar/Profilebar";
import axios from "axios";
import PostList from "../components/postlistsection/Postlist";
import "./Mainpage.css";
import { useState } from "react";

function MyPostPage(props) {
    const [isNoMorePost, setIsNoMorePost] = useState(false);
    const getPageAPI = async (serverIP,page,PostList,setPostList) => {
    const token = localStorage.getItem('token');
    console.log(token)
    console.log("Check Postlist1", PostList);
    await axios
      .get(serverIP + `/mypages?page=${0}`,
      {headers: { Authorization: `Bearer ${token}` }}
      )
      .then((res) => {
        console.log("res", res.data);
        setPostList(PostList.concat(res.data));
        if(res.data.length <10) setIsNoMorePost(true)
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
      <div>
      <ProfileBar
        isLogin={props.isLogin}
        nowLogin={props.nowLogin}
        Logout={props.Logout}
        getName={props.getName}
      /></div>
      <div className="Mainbox">
      {!isNoMorePost && <p>ไม่มีโพสแล้วจ้า</p>}
      <PostList isLogin={props.isLogin} getPageAPI={getPageAPI} />
      </div>
    </div>
  );
}

export default MyPostPage;
