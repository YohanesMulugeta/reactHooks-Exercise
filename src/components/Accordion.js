import React from "react";

const Accordion = ({ items }) => {
  const onTitleClick = (i) => {
    console.log("title " + i + " clicked");
  };

  const renderedItems = items.map((item, i) => {
    return (
      // react fragment is when we want to return multiple JDX elements
      // For every list items we are rendering it is a best practice to add a key attribute to the outer most container to boost performance

      <React.Fragment key={item.title}>
        <div className="title active" onClick={onTitleClick.bind(null, i)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
