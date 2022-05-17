import React, { useEffect } from "react";
import axios from "axios";
import { API_KEY } from "./configure";

const Convert = ({ language, text }) => {
  useEffect(() => {
    const find = async () => {
      const res = await axios.post(
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
    };

    find();

    const timeoutId = setTimeout(() => {}, 1000);

    return clearTimeout(timeoutId);
  }, [text, language]);

  return <div />;
};

export default Convert;
