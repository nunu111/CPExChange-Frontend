import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Context } from "@ckeditor/ckeditor5-core";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";

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
