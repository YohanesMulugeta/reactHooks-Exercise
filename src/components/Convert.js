import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncingText, setDebouncingText] = useState(text); // a big take away whenever a erender happens the value of the states will not change unless we explicitly put it

  /////////////////////////////////// the time out function for debouncing text
  //////////////////////////////////

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncingText(text);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [text]);

  //////////////////////////////// the use effect
  ///////////////////////////////
  useEffect(() => {
    const request = async () => {
      const res = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslated(res.data.data.translations[0].translatedText);
    };

    request();
  }, [debouncingText, language]);

  //////////////////////////////// to be RENDERED
  ///////////////////////////////
  return (
    <div>
      <h2>{translated}</h2>
    </div>
  );
};

export default Convert;
