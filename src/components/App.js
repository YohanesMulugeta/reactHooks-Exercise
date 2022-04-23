import React from "react";

import Accordion from "./Accordion";

const items = [
  {
    title: "what is react",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why react?",
    content: "React is fast, flexible and relaibel javascript framework",
  },
  {
    title: "How do we use react?",
    content: "We use react by creating components.",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
