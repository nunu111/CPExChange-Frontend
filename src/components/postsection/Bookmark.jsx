import React from "react";
import { Link } from "react-router-dom";
import editIcon from "../Icon/edit.svg";
import axios from "axios";
import { IPconfig } from "../function/IPconfig";

const Bookmark = (props) => {
  return (
    <div className="Mainbox" style={{ display: "flex" }}>
      <img
        src={editIcon}
        alt="Edit_Icon"
        style={{ width: "50px", height: "50px" }}
      />
      <h5 style={{ marginLeft: "10px" }}>Book mark</h5>
    </div>
  );
};

export default Bookmark;
