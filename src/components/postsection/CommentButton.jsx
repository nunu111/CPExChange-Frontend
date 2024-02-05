import React, {useEffect, useState} from 'react'
import Editor from './Editor';

function CommentButton() {

  const [isCommentFormVisible, setCommentFormVisible] = useState(false);

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);


  const handleCommentButtonClick = () => {
    setCommentFormVisible(!isCommentFormVisible);
  }

  const handleCommentSubmit = () => {
    // You can perform additional actions here, e.g., send commentText to the server
  }

  return (
    <div>
        <button className='commentButton' onClick={handleCommentButtonClick}>Comment</button>
        {/* {isCommentFormVisible && ( */}
          <div>
            <Editor
          onChange={(editorData) => setData(editorData)}
          editorLoaded={editorLoaded}
        /> 
          </div>
        {/* )} */}
    </div>
  )
}

export default CommentButton