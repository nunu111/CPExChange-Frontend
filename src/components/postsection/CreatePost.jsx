import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

import Editor from "./Editor";

export default function CreatePost(props) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const DataPost = () => {
    console.log(JSON.stringify(data.replace(/<\/?p>/g, "")));
  };

  return (
    <div className="Mainbox">
      <div>
        <Link to="/" className="goback">
          {"< ย้อนกลับ"}
        </Link>
      </div>
      <br />
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
          onChange={(editorData) => {
            setData(editorData);
          }}
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
