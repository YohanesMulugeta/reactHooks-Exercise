import React, { useState } from "react";

const options = [
  { label: "Amharic", value: "am" },
  { label: "Arabic", label: "ar" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
};

export default Translate;
