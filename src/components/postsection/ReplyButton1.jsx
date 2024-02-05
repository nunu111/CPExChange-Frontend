import React, { useState, useEffect } from "react";
import "../popup.css";
import "../index.css";
import Editor from "./Editor";
import ReactDOM from "react-dom";

const ReplyButton1 = (props) => {
  const { isPopupVisible, togglePopupVisibility } = props;

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return isPopupVisible ? (
    ReactDOM.createPortal(
      <div className="popup-overlay">
        <div
          style={{ width: "100%", height: "100%" }}
          onClick={togglePopupVisibility}
        />
        <div className="popup-container">
          <div className={"mainContainer"}>
            <div className={"titleContainer"}>
              <div>
                <Editor
                  onChange={(editorData) => setData(editorData)}
                  editorLoaded={editorLoaded}
                />
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  ) : (
    <></>
  );
};

export default ReplyButton1;
