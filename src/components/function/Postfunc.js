import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Postfunc() {
    const [page_id, setPage_id] = useState(1);
    const [postList, setPostList] = useState([{}]);
    const [username, setUsername] = useState("");
    const [title, settitle] = useState("");
    
    const UpdatePost = ()=>{
        settitle("title");
    }
    const PostAPI =()=>{
        // axios.get('/posts?page={page_id}').then((res)=>{
        //     setPostList(res.data);
        // })

    }
    const PostListAPI= async()=>{
        
    }

    const getPostdetail = ()=>{
        UpdatePost();
        console.log(title);
        return title;
    }

  return {
    PostListAPI,
    PostAPI,
    getPostdetail,
    UpdatePost
  }
}
