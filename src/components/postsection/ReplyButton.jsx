import React, { useState, useEffect } from "react";
import Editor from "./Editor";

const ReplyButton = ({ onReplySubmit }) => {
  const [isReplyFormVisible, setReplyFormVisible] = useState(true);
  const [replyText, setReplyText] = useState("");

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleReplyButtonClick = () => {
    setReplyFormVisible(!isReplyFormVisible);
  };

  const handleReplySubmit = () => {
    // You can perform additional actions here, e.g., send replyText to the server
    if (replyText.trim() !== "") {
      onReplySubmit(replyText);
    }

    // Reset state and hide the reply form
    setReplyText("");
    setReplyFormVisible(false);
  };

  return (
    <div>
      <button className="replyButton" onClick={handleReplyButtonClick}>
        Reply
      </button>
      {isReplyFormVisible && (
        <div>
          {/* { <textarea
            placeholder="Write a reply"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          ></textarea> } */}
          <Editor
            onChange={(editorData) => setData(editorData)}
            editorLoaded={editorLoaded}
          />
          <button className="replyButton" onClick={handleReplySubmit}>
            Submit Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default ReplyButton;
