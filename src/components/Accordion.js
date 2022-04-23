import React from "react";

import "./style.css";

const Accordion = ({ items }) => {
  const onTitleCllick = function (i) {
    console.log(`title is ${i}`);
  };
  const renderItems = items.map((item, i) => {
    return (
      <React.Fragment key={item.title}>
        {" "}
        {/* this is to tell react this is only a react fragment that contains some JSX */}
        <div className="title active" onClick={onTitleCllick.bind({}, i)}>
          <i className="icon dropdown"></i>
          {item.title}
        </div>
        <div className="content active hidden">{item.content}</div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
