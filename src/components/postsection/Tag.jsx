import React, { useState, useEffect } from "react";

export default function Tag(props) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(props.selectedTags.includes(props.tagname));
  }, [props.selectedTags, props.tagname]);

  const handleButtonClick = () => {
    setIsSelected((prevSelected) => !prevSelected);
    props.onTagSelect(props.tagname);
  };

  return (
    <span>
      <input
        className={`inputButton ${isSelected ? "selected" : ""}`}
        value={props.tagname}
        type="button"
        onClick={handleButtonClick}
      />
    </span>
  );
}
