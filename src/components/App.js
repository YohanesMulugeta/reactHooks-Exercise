import React from "react";

import Accordion from "./Accordion";
import Exercise from "./Exercise";
import Search from "./Search";
import "./style.css";

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

// PROJECT

export default () => {
  return (
    <div className="smooth">
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

// EXERCISE

// export default () => {
//   return (
//     <div>
//       <Exercise />
//     </div>
//   );
// };
