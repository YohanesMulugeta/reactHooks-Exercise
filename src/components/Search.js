import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const find = async () => {
      const response = axios.get("https://en.wikipedia.org/w/api.php?", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      console.log(response);
    };

    find();
  }, [term]);
  //   console.log(term);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            className="input"
            onChange={(e) => {
              // insuring CONTROLLED data transfer
              setTerm(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
