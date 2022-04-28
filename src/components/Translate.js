import React, { useState, useEffect, useRef } from "react";
import DropDown from "./DropDown";

// OPTIONS OF LANGUAGES

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Amharic", value: "am" },
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
    </div>
  );
};

export default Translate;
