import React, { useRef, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-quill/dist/quill.snow.css"; // Import the styles
import "katex/dist/katex.min.css";

import Latexeditor from "./LatexEditor";

// mathquill4quill include
import mathquill4quill from "mathquill4quill";
import "mathquill4quill/mathquill4quill.css";

import katex from "katex";
import "katex/dist/katex.min.css";

import "./editor.css";

window.katex = katex;

export default function MakeEditor(props) {
  const handleParentEditorChange = (content) => {
    props.SetEditorValue(content);
    // Update the parent component's state with the editor content
  };

  const CUSTOM_OPERATORS = [
    ["\\pm", "\\pm"],
    ["\\sqrt{x}", "\\sqrt"],
    ["\\sqrt[3]{x}", "\\sqrt[3]{}"],
    ["\\sqrt[n]{x}", "\\nthroot"],
    ["\\frac{x}{y}", "\\frac"],
    ["\\sum^{s}_{x}{d}", "\\sum"],
    ["\\prod^{s}_{x}{d}", "\\prod"],
    ["\\coprod^{s}_{x}{d}", "\\coprod"],
    ["\\int^{s}_{x}{d}", "\\int"],
    ["\\binom{n}{k}", "\\binom"],
  ];
  const [operators, setOperators] = useState(CUSTOM_OPERATORS);
  const [displayHistory, setDisplayHistory] = useState(true);
  const [displayDeleteButtonOnHistory, setDisplayDeleteButtonOnHistory] =
    useState(true);

  const options = { displayHistory, operators, displayDeleteButtonOnHistory };

  return (
    <div className="editor">
      <Latexeditor
        options={options}
        onEditorChange={handleParentEditorChange}
        SetEditorValue={props.SetEditorValue}
        key={JSON.stringify(options)}
      />
    </div>
  );
}
