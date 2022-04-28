import React, { useState } from "react";

import Accordion from "./Accordion";
import Exercise from "./Exercise";
import Search from "./Search";
import Translate from "./Translate";
import DropDown from "./DropDown";

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

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "The Color Blue", value: "blue" },
];

// PROJECT

export default () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="smooth">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle DropDown
      </button>
      {showDropdown ? (
        <DropDown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label="Select a Color"
        />
      ) : null} */}
      <Translate />
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
