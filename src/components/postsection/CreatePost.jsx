import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

export default function CreatePost(props) {
  return (
    <div className="mainbox">
      <div>
        <Link to="/">
          <button>Go to Home</button>
        </Link>
      </div>
      <br />
      <div className="Topicbox">
        <TextField
          fullWidth
          label="TOPIC"
          id="fullWidth"
          style={{ width: "800px" }}
        />
      </div>
    </div>
  );
}
