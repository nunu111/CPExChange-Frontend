import React, { useRef, useState } from "react";

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import 'katex/dist/katex.min.css';

import Latexeditor from "./LatexEditor";



// mathquill4quill include
import mathquill4quill from "mathquill4quill";
import { addStyles, EditableMathField } from 'mathquill4quill'
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
    ["\\text{dx}", "\\text{dx}"],
    ["\\binom{n}{k}", "\\binom"],
    ["\\vec{x}","\\vec"],
    ["\\lim{x}","\\lim"],
    ["\\\approx","\\approx"],
    ["\\neq","\\neq"],
    ["\\partial","\\partial"],
    ["\\geq","\\geq"],
    ["\\leq","\\leq"],
    ["\\hat{x}","\\hat"],
    ["\\check{x}","\\check"],
    ["\\Delta","\\Delta"],
    ["\\infty","\\infty"],
    ["\\forall","\\forall"],
    ["\\exists","\\exists"],
    ["\\emptyset","\\emptyset"],
    ["\\subset","\\subset"],
    ["\\supset","\\supset"],
    ["\\Theta","\\Theta"],
    ["\\pi","\\\pi"]
    
  ];
  const [operators, setOperators] = useState(CUSTOM_OPERATORS);
  const [displayHistory, setDisplayHistory] = useState(true);
  const [displayDeleteButtonOnHistory, setDisplayDeleteButtonOnHistory] =
    useState(true);

  const options = {  operators };
  
  // const options = { displayHistory, operators, displayDeleteButtonOnHistory };

  return (
    <div className="editor">
      <div className="date">
      <span>Have problems with Latex?  </span>
      <a href="https://katex.org/docs/support_table" target="_blank" style={{textDecoration:"none"}}>Cliked here</a>
      </div>
      <Latexeditor options={options} onEditorChange={handleParentEditorChange} SetEditorValue={props.SetEditorValue} key={JSON.stringify(options)} />
    </div>
  );
}
