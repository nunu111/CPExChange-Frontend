import React from 'react'
import ProfileBar from "../components/profilebar/Profilebar";
import axios from "axios";
import PostList from "../components/postlistsection/Postlist";
import "./Mainpage.css";
export default function TagPage(props) {
    const getPageAPI = async (serverIP,page,PostList,setPostList,selectedTags) => {

        const token = localStorage.getItem('token');
        console.log(token)
        console.log("Check Postlist1", PostList);
        await axios
          .post(serverIP + `/mypages?page=${0}`,{
            selectedTags
          },
          {headers: { Authorization: `Bearer ${token}` }}
          )
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
