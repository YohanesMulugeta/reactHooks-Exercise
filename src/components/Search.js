import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [termResults, setTermResults] = useState([]);

  // using ASYNC annotation directly in the call back function is =NOT ALLOWED in useEffect method
  //  useEffect(async () => {
  //  console.log('am getting better and better at react')
  //  })

  console.log(termResults);

  // THE RECOMENDED WAY OF WORKING WITH PROMISES INSIDE A useEffect method
  useEffect(() => {
    const searchWiki = async () => {
      // creating the a sync fun inside the call back function of useEffect
      const { data } = await axios("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setTermResults(data.query.search);
    };

    // calling the asunc method
    if (term) searchWiki();
  }, [term]);

  const onSearchChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter the search term</label>
          <input
            className="input"
            onChange={onSearchChange}
            type="text"
            value={term}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
