import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "./configure";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncingText, setDebouncingText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncingText(text);
    }, 1000);

    // console.log(debouncingText);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    //   WORKING WITH ASYNC FUNCTIONS INSIDE A USE EFFECT
    const find = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncingText,
            target: language.value,
            key: API_KEY,
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);

      // console.log("lala");
    };

    if (debouncingText) find();
  }, [debouncingText, language]);

  return (
    <div>
      <h3 className="ui header">{translated}</h3>
    </div>
  );
};

export default Convert;
