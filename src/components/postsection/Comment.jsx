import React, { useEffect, useState } from "react";
import "./Comment.css";
import commentIcon from "../Icon/comment.svg";
import heartIcon from "../Icon/heart.svg";
import verifyIcon from "../Icon/verify.svg";
import unknowIcon from "../Icon/unknow.svg";
import ReplyButton from "./ReplyButton";
import { IPconfig } from "../function/IPconfig";
import axios from "axios";
export default function Comment(props) {
  const { getIP } = IPconfig();
  const [isVerify, setIsVerify] = useState(true);
  const [commentID, setCommentID] = useState(props.CommentID);
  const [replylist, setReplylist] = useState([]);
  const [data, setData] = useState("");
  const [text, setText] = useState("");

const [replyList, setReplyList] = useState([]);


useEffect(() => {
  getReplyAPI();
},[])

const getReplyAPI = async () => {
  const serverIP = getIP();
  await axios.get(serverIP + `/comments/${props.CommentID}/replys`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      console.log("resReply : ", res.data);
      setReplylist(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

  const replyAPI = async () => {
    console.log("glc",props.CommentID)
    const serverIP = getIP();
      await axios
        .post(serverIP + `/replys/create` ,
        {
          commentID : props.CommentID,
          detail : JSON.stringify(data, null, 2).slice(1,-1),
        },
        {headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }} )
        .then((res) => {
          console.log("resPost : ", res.data);
  
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const handleHtmlChange = (event) => {
    const htmlContent = event.target.value;
    setText(htmlContent);
  };
  const convertToText = () => {
    // Create a temporary element to extract text without HTML tags
    const tempElement = document.createElement("div");
    tempElement.innerHTML = text;
    const plainText = tempElement.innerText;
    return plainText;
  };

  return (
    <div className="commentbox">
      {props.hasVerify ? (
        <span className="topvarify">
          <img src={verifyIcon} alt="verify" className="verify" />
          {/* <span className="text">Answer Vilified</span> */}
        </span>
      ) : (
        <></>
      )}
      <div className="cCLV">
        <img src={commentIcon} alt="comment" className="comment" />
        <span className="text">{props.reply}</span>
        <img src={heartIcon} alt="heart" className="heart" />
        <span className="text">{props.LikeAmount}</span>
      </div>
      <div className="userdate">
        <img src={unknowIcon} className="profile" alt="profile" />
        <div>
          <p className="username">{props.displayName}</p>
          <span className="date">{props.CreateDate}</span>
        </div>
      </div>
      <p dangerouslySetInnerHTML={{ __html: props.detail }} />
      {props.isLogin() && !(props.reply === null)&& <ReplyButton setData={setData} replyAPI={replyAPI}/>}
      {
        replylist.map((com, i) =>{
          return <Comment
          CommentID={com.id}
          displayName={com.displayName}
          LikeAmount={com.LikeAmount}
          hasVerify={com.hasVerify}
          reply={null}
          CreateDate={com.CreateDate}
          detail={com.detail}
          isLogin={props.isLogin}
          key={i}
        />
        })
      }
    </div>
  );
}
