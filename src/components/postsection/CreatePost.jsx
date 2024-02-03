// CreatePost.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Editor from "./Editor";
import PopupExitPost from "./PopupExitPost";
import axios from "axios";

export default function CreatePost(props) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const [topic, setTopic] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const createPostAPI = async () => {
    const serverIP = "http://192.168.116.101:8080";

    const resp = await axios
      .post(serverIP + "/posts/create", {
        data,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const DataPost = () => {
    createPostAPI();
    console.log(topic);
    console.log(data);
    console.log(JSON.stringify(data.replace(/<\/?p>/g, "")));
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
        <Editor
          onChange={(editorData) => setData(editorData)}
          editorLoaded={editorLoaded}
        />
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
