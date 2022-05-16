import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite js liberary among engineers",
  },
  {
    title: "How to use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
  return (
    <div className="">
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
