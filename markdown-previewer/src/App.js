/** Importing React dependencies. */
import React from 'react';
import './App.css';

/** Importing marked library. */
import marked from "marked";

function App() {
  const [text, setText] = React.useState("# Welcome to Markdown Previewer!");

  function updateTextState(event) {
    setText(event.target.value);
  }
  
  function getMarkdownText() {
    let markup = marked(text);
    return { __html: markup };
  }

  return (
    <div className="main">
      <h1 className="title">Mark</h1>
      <div className="container">
        <textarea 
          id="editor" 
          value={text} 
          onChange={(event) => updateTextState(event)} 
        />

        <div 
          id="preview" 
          dangerouslySetInnerHTML={getMarkdownText()}>

        </div>
      </div>
    </div>
  );
}

/** Exporting component. */
export default App;
