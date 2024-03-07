import React, { useState } from 'react'
import ProfileBar from "../components/profilebar/Profilebar";
import axios from "axios";
import PostList from "../components/postlistsection/Postlist";
import "./Mainpage.css";
import Tag from '../components/postsection/Tag';
export default function TagPage(props) {

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
    "Graphs in two and three - dimensional space",
    "Multiple integrals",

    "Cal3",
    "Vector calculus",
    "Functions of complex variable",
    "Infinite series",
    "Fourier series",
  ]);

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelect = (tagName) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tagName)
        ? prevSelectedTags.filter((tag) => tag !== tagName)
        : [...prevSelectedTags, tagName]
    );
  };
    const getPageAPI = async (serverIP,page,PostList,setPostList) => {

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
          <div className="Mainbox">
            {taglist.map((name, i) => {
          return (
            <Tag
              tagname={name}
              key={i}
              selectedTags={selectedTags}
              onTagSelect={handleTagSelect}
            />
          );
        })}
          
          <PostList isLogin={props.isLogin} getPageAPI={getPageAPI} />
          </div>
        </div>
      );
}
