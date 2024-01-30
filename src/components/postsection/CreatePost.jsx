// CreatePost.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Editor from "./Editor";
import PopupExitPost from "./PopupExitPost";

export default function CreatePost(props) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const DataPost = () => {
    console.log(JSON.stringify(data.replace(/<\/?p>/g, "")));
  };

  const handleGoBack = () => {
    // Show the popup when the user clicks on "< ย้อนกลับ"
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    // Close the popup
    setPopupVisible(false);
  };

  const handleConfirmGoBack = () => {
    // Add logic for confirming go back, e.g., navigating to the previous page
    // ...

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
