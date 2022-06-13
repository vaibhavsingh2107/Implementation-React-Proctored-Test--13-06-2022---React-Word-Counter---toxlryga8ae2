import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [content, setContent] = useState(null);
  const [fontSize, setFontSize] = useState(16);
  const [limit, setLimit] = useState(50);

  const getWords = () => {
    return content == null || content == ""
      ? 0
      : content.trim().split(" ").length;
  };

  const getChar = () => {
    return content == null || content == "" ? 0 : content.split("").length;
  };

  return (
    <div id="main">
      <div>
        <input
          type="range"
          id="fontSize-input"
          min="16"
          max="32"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          id="char-limit-input"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
      </div>
      <br />
      <div>
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
          style={{ fontSize: fontSize + "px" }}
          maxLength={limit}
        >
          {content}
        </textarea>
      </div>
      <br />
      <div id="word-counter">{getWords()}</div>
      <br />
      <div id="char-counter">{getChar()}</div>
    </div>
  );
};

export default App;
