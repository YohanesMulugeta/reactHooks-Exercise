import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  { label: "Amharic", value: "am" },
  { label: "Arabic", value: "ar" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);

  return (
    <Dropdown
      title={"Select Language"}
      options={options}
      selected={language}
      onSelectedChange={setLanguage}
    />
  );
};

export default Translate;
