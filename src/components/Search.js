import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  // console.log(results);

  // =================================================================   USEEFFECT
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

    // setting the timeout before performing any search
    const searchTimeout = setTimeout(() => {
      if (term) find();
      console.log(results);
    }, 1000);

    // we can only return a CALLBACK function from use effect that will be used to perform some cleanup
    return () => {
      clearTimeout(searchTimeout);
    };
    // a clean up function is called just before a useeffect being called again
  }, [term]);
  //   console.log(term);

  // =========================================================    rendering RESULTS
  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  // ============================================================================ renderig the SEARCH COMPONENT

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
      <div className="ui styled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
