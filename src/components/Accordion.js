import React from "react";

const Accordion = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <div>
        <div className="title active">
          <i className="icon dropdown"></i>
          {item.title}
        </div>
        <div className="content active"></div>
      </div>
    );
  });
};

export default Accordion;
