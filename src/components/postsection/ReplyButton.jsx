import React, { useState, useEffect } from "react";
import MakeEditor from "../editor/MakeEditor";


const ReplyButton = ({ onReplySubmit }) => {
  const [replyText, setReplyText] = useState("");
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleReplySubmit = () => {
    if (replyText.trim() !== "") {
      onReplySubmit(replyText);
    }

    setReplyText("");
    console.log(data);
  };

  return (
    <div>
      {/* { <textarea
            placeholder="Write a reply"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          ></textarea> } */}
          <MakeEditor SetEditorValue={setData}/>

      <button className="replyButton" onClick={handleReplySubmit}>
        Submit Reply
      </button>
    </div>
  );
};

export default ReplyButton;
