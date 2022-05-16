import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    // this is because in use effect we canont use an async callback instead we use an a sync function inside the call back
    const find = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php?", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term) find();
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
