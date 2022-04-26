import { render } from "@testing-library/react";
import React, { useState } from "react";

const Exercise = () => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count + 1);
  };

  // this will be working as a render method
  return (
    <React.Fragment>
      <button className="ui button" onClick={onButtonClick}>
        Click me
      </button>
      <h1>Clicked count: {count}</h1>
    </React.Fragment>
  );
};

export default Exercise;
