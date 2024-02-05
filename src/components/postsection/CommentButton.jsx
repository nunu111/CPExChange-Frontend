import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import { IPconfig } from "../function/IPconfig";
import axios from "axios";
function CommentButton(props) {
  const [isCommentFormVisible, setCommentFormVisible] = useState(false);

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const { getIP } = IPconfig();

  const CreateCommnetAPI = async () => {
    const serverIP = getIP();
    await axios.post(serverIP + "/comments/create", {
      PostID: props.PID,
      detail: data,
      cookie: "cookie",
    });
    props.setComment();
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleCommentButtonClick = () => {
    setCommentFormVisible(!isCommentFormVisible);
    CreateCommnetAPI();
    setData(""); // Clear the text field when the button is clicked
    DataPost(); // Call DataPost function when the button is clicked
  };

  const handleCommentSubmit = () => {
    // You can perform additional actions here, e.g., send commentText to the server
  };

  const DataPost = () => {
    console.log(data);
    console.log(JSON.stringify(data.replace(/<\/?p>/g, "")));
    // Add any additional logic or API calls here based on your requirements
  };

  return (
    <div>
      {/* {isCommentFormVisible && ( */}
      <div>
        <Editor
          onChange={(editorData) => setData(editorData)}
          editorLoaded={editorLoaded}
        />
      </div>
      {/* )} */}
      <button className="commentButton" onClick={handleCommentButtonClick}>
        Comment
      </button>
    </div>
  );
}

export default CommentButton;
