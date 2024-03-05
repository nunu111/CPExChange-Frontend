// CreatePost.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Editor from "./Editor";
import PopupExitPost from "./PopupExitPost";
import MakeEditor from "../editor/MakeEditor";
import axios from "axios";
import { IPconfig } from "../function/IPconfig";
export default function CreatePost(props) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const [topic, setTopic] = useState("");
  const [tag, setTag] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const { getIP } = IPconfig();
  const createPostAPI = async () => {
    const serverIP = getIP();
    console.log("data",data);
    await axios
      .post(serverIP + "/posts/create", {
        topic,
        tag: JSON.stringify(tag),
        detail: JSON.stringify(data, null, 2).slice(1,-1),
        cookie: "",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
    console.log(data);
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const DataPost = () => {
    setData(JSON.stringify(data, null, 2))
    // console.log(JSON.stringify(data, null, 2));
    // console.log(JSON.parse(JSON.stringify(data, null, 2)))
    createPostAPI();

    
    // console.log(JSON.stringify(data.replace(/<\/?p>/g, "")));
  };

  // const TopicPost = () => {
  //   console.log(data);
  // }

  const handleGoBack = () => {
    // Show the popup when the user clicks "< ย้อนกลับ"
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    // Close the popup
    setPopupVisible(false);
  };

  const handleConfirmGoBack = () => {
    // Close the popup after handling the confirmation
    setPopupVisible(false);
  };

  return (
    <div className="Mainbox">
      <div>
        {/* Show the popup when the user clicks on the link */}
        <span className="goback" onClick={handleGoBack}>
          {"< ย้อนกลับ"}
        </span>
      </div>
      <br />

      {popupVisible && (
        <PopupExitPost
          onConfirm={handleConfirmGoBack}
          onClose={handlePopupClose}
        />
      )}

      <div className="Postbox">
        <TextField
          fullWidth
          label="TOPIC"
          id="fullWidth"
          style={{ width: "1250px" }}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>
      <br />

      <div className="Postbox">
        <MakeEditor SetEditorValue={setData} />
      </div>
      <div
        className="CreatePostButton"
        style={{ textAlign: "right", marginTop: "20px", left: "1200px" }}
      >
        <div className="nounderline" onClick={DataPost}>
          <Link to="/" className="goback">
            {"POST"}
          </Link>
        </div>
      </div>
    </div>
  );
}
