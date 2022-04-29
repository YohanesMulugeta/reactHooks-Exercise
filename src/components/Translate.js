import React, { useState, useEffect, useRef } from "react";

import DropDown from "./DropDown";
import Convert from "./Convert";

// API KEY AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

// OPTIONS OF LANGUAGES

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Amharic", value: "am" },
  { label: "Germany", value: "de" },
];

//////////////////////////////////////////////////// TRANSLATE FUNCFTION
///////////////////////////////////////////////////
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <DropDown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a Language"
      />

      <hr />
      <h3 className="ui header">Output</h3>

      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
