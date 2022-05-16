import React, { useState } from "react";

const Accordion = ({ items }) => {
  // whenever we set the activeIndex using setActiveIndex this functional component will be re rendered
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (i) => {
    if (i === activeIndex) setActiveIndex(null);
    else setActiveIndex(i);
  };

  const renderedItems = items.map((item, i) => {
    const active = activeIndex === i ? "active" : "";

    return (
      // react fragment is when we want to return multiple JDX elements
      // For every list items we are rendering it is a best practice to add a key attribute to the outer most container to boost performance

      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClick(i);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
