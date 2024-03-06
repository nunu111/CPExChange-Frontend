import React, { Component } from 'react'

// KaTeX dependency


// Quill dependency
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

// MathQuill dependency
// import "./jquery";
// import "@edtr-io/mathquill/build/mathquill.js";
// import "@edtr-io/mathquill/build/mathquill.css";

// mathquill4quill include
import mathquill4quill from "mathquill4quill";
import "mathquill4quill/mathquill4quill.css";
import "./editor.css";
import katex from "katex";
import "katex/dist/katex.css";
window.katex = katex;

export default class Latexeditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorContent: ""
    };
    this.reactQuill = React.createRef();
  }

  componentDidMount() {
    const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill, katex });
    enableMathQuillFormulaAuthoring(
      this.reactQuill.current.editor,
      this.props.options
    );
  }
  handleEditorChange = (content, delta, source, editor) => {
    // console.log('Editor content:', content);
    this.setState({
      editorContent: content,
    });
    // Pass the updated content to the parent component
    this.props.onEditorChange(content);
  };

  
  render() {
    return (
      <div className='LatexEditor'>
      <ReactQuill
        ref={this.reactQuill}
        onChange={this.handleEditorChange}
        className='LatexEditor'
        
        modules={{
          formula: true,
          toolbar: [
            [{ 'font': [] }],
            
            [{ size: ['small', false, 'large', 'huge'] }], 
            // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
            ['bold', 'italic', 'underline', 'strike',],
            [{ 'script': 'sub'}, { 'script': 'super' },'formula'],   
            ['blockquote', 'code-block',{ 'header': 1 }, { 'header': 2 }], 
            ['link', 'video',"image"],
            
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
            
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'align': [] }],
            ['clean']  ]
        }}
        placeholder="Type text here, or click on the formula button to enter math."
        theme="snow"
      />
          {/* <h2>Editor Content:</h2>
          <div dangerouslySetInnerHTML={{ __html: this.state.editorContent }} /> */}

      </div>
    )
  }
}
