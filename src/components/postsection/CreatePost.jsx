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
  return (
    <div className="Mainbox">
      <div>
        <Link to="/" className="goback">
          {"< ย้อนกลับ"}
        </Link>
      </div>
      <br />
      <div className="Topicbox">
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
          onChange={(data) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
        />
      </div>
    </div>
  );
}
