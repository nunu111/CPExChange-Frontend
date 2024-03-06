import React, { useState, useEffect } from "react";
import MakeEditor from "../editor/MakeEditor";


const ReplyButton = ({ onReplySubmit ,setData , replyAPI}) => {



  const handleReplySubmit = () => {
    replyAPI()
    setData("");
    window.location.reload()
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
