import React, { useEffect, useState } from "react";

import { IPconfig } from "../function/IPconfig";
import axios from "axios";
import MakeEditor from "../editor/MakeEditor";
function CommentButton(props) {
  const [isCommentFormVisible, setCommentFormVisible] = useState(false);

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const { getIP } = IPconfig();

  const CreateCommnetAPI = async () => {
    const token = localStorage.getItem('token');
    const serverIP = getIP();

    await axios.post(serverIP + "/comments/create", 
    {
      postID: props.PID,
      detail: JSON.stringify(data, null, 2).slice(1,-1),
    }
    ,{headers: { Authorization: `Bearer ${token}` }},
    );
    props.setComment();
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleCommentButtonClick = () => {
    setCommentFormVisible(!isCommentFormVisible);
    console.log(JSON.stringify(data, null, 2).slice(1,-1))
    CreateCommnetAPI();

  };


  return (
    <div>
      {/* {isCommentFormVisible && ( */}
      <div>
        <MakeEditor SetEditorValue={setData} />
      </div>
      {/* )} */}
      <button className="commentButton" onClick={handleCommentButtonClick}>
        Comment
      </button>
    </div>
  );
}

export default CommentButton;
