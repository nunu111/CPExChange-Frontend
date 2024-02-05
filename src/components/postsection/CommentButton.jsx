import React, { useEffect, useState } from "react";
import Editor from "./Editor";

function CommentButton() {
  const [isCommentFormVisible, setCommentFormVisible] = useState(false);

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleCommentButtonClick = () => {
    setCommentFormVisible(!isCommentFormVisible);
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
      <button className="commentButton" onClick={handleCommentButtonClick}>
        Comment
      </button>
      {/* {isCommentFormVisible && ( */}
      <div>
        <Editor
          onChange={(editorData) => setData(editorData)}
          editorLoaded={editorLoaded}
        />
      </div>
      {/* )} */}
    </div>
  );
}

export default CommentButton;
