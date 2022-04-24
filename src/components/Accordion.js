import React, { useState } from "react"; // useStaet gives us access to use a state in our functional component

import "./style.css";

const Accordion = ({ items }) => {
  // this is the same as props.items
  const [activeIndex, setActiveIndex] = useState(null); // this is the initialization of the state in fnctional components that is setActiveIndex will be the method we will be using to set the active index
  // the [] indicates that we are performing an array destructuring that is when ever we call a useState() it returns an array containing two elements
  // useState() returns an array containing as a first value the pice of state we want to track and the second value is a Setter function that sets the first value when ever we call it with a value it updates the state and calls the render method

  const onTitleCllick = function (i) {
    setActiveIndex(i);
  };

  const renderItems = items.map((item, i) => {
    const active = activeIndex === i ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        {" "}
        {/* this is to tell react this is only a react fragment that contains some JSX */}
        <div className={`title ${active}`} onClick={onTitleCllick.bind({}, i)}>
          <i className="icon dropdown"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>{item.content}</div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
