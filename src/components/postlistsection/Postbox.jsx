import React, { useEffect, useState } from "react";
import pinIcon from "../Icon/pin.svg";
import PostTag from "../posttag";
import commentIcon from "../Icon/comment.svg";
import heartIcon from "../Icon/heart.svg";
import verifyIcon from "../Icon/verify.svg";
import EditPost from "../postsection/EditPost";
import axios from "axios";
import { IPconfig } from "../function/IPconfig";
import { Link, Route, Router } from "react-router-dom";
const Postbox = (props) => {
  const [Tags, setTag] = useState([]);
  const [isVilified, setIsVilified] = useState(false);
  const [PID, setPID] = useState(null);
  const handleBookmark = () => {
    pinAPI();
  };
  useEffect(() => {
    setPID(props.PID);
  }, []);

  const { getIP } = IPconfig();
  const pinAPI = async () => {
    const serverIP = getIP();
    const sending = {
      postId: PID,
    };

    try {
      const response = await axios.post(`${serverIP}/addbookmark`, sending, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (response.status === 200) {
        console.log("Success");
      } else {
        console.error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      console.error("Error11:", error);
    }
  };
  return (
    <div className="Postbox">
      <span className="Title">{props.title}</span>
      <span className="top">
        <img
          src={pinIcon}
          alt="pin"
          className="bookmark"
          onClick={handleBookmark}
        />
      </span>
      <p className="date">
        {props.date} by {props.displayname}
      </p>
      <hr />
      {props.taglist.map((Tag, i) => {
        return <PostTag TagName={Tag} key={i} />;
      })}
      <br />
      <p
        className="detail"
        dangerouslySetInnerHTML={{ __html: props.detail }}
      />

      <div className="transparent"></div>
      <br />

      <span className="CLV">
        {props.isVerify === "1" ? (
          <span className="text">
            <img src={verifyIcon} alt="verify" className="verify" />
            Answer Vilified
          </span>
        ) : (
          <></>
        )}
        <img src={commentIcon} alt="comment" className="comment" />
        <span className="text">{props.comment}</span>
        <img src={heartIcon} alt="heart" className="heart" />
        <span className="text">{props.like}</span>
        <Link to={"/Post/" + PID} className="viewButton">
          View
        </Link>
      </span>
    </div>
  );
};

export default Postbox;
