import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "./configure";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    //   WORKING WITH ASYNC FUNCTIONS INSIDE A USE EFFECT
    const find = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: API_KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    const timeoutId = setTimeout(() => {
      if (text) find();
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, language]);

  return (
    <div>
      <h3 className="ui header">{translated}</h3>
    </div>
  );
};

export default Convert;
