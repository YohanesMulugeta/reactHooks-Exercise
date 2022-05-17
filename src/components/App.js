import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
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

const options = [
  { label: "The Color Red", value: "Red" },
  { label: "The Color Green", value: "green" },
  { label: "Shades of Blue", value: "blue" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Show
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          title="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null} */}
    </div>
  );
};

export default App;
