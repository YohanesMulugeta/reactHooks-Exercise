import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [termResults, setTermResults] = useState([]);

  // using ASYNC annotation directly in the call back function is =NOT ALLOWED in useEffect method
  //  useEffect(async () => {
  //  console.log('am getting better and better at react')
  //  })

  //////////////////////////////////////////////////////////// USE EFFECT
  ///////////////////////////////////////////////////////////

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

    if (term && termResults.length) {
      searchWiki();
    } else {
      ////////////////////////////////// setting the time out function
      /////////////////////////////////
      const timeoutId = setTimeout(() => {
        if (term) searchWiki();
      }, 1000);

      /////////////////////////////// returning a call back function from a useEffect function
      ///////////////////////////////
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  ///////////////////////////////////////////////////////// ONCHANGE EVENT HANDLER
  ////////////////////////////////////////////////////////
  const onSearchChange = (e) => {
    setTerm(e.target.value);
  };

  ///////////////////////////////////////////////////////// RENDERED RESULTS
  ////////////////////////////////////////////////////////

  const renderResults = function () {
    return termResults.map(({ pageid, title, snippet }) => {
      return (
        <div className="item" key={pageid}>
          <div className="right floated content">
            <a
              className="ui button"
              href={`https://en.wikipedia.org?curid=${pageid}`}
            >
              Go
            </a>
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
          </div>
        </div>
      );
    });
  };

  /////////////////////////////////////////////////// THE RETURN VALUE
  //////////////////////////////////////////////////

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

      <div className="ui celled list">{renderResults()}</div>
    </div>
  );
};

export default Search;
