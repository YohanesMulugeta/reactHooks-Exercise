import React, { useState } from "react";

import Accordion from "./Accordion";
import Exercise from "./Exercise";
import Search from "./Search";
import Translate from "./Translate";
import DropDown from "./DropDown";
import Rout from "./rout";

// window.location is a js object always updated when we change or navigate around a different url

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
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  const showAccordion = () => {
    if (window.location.pathname === "/") return <Accordion items={items} />;
  };

  const showSearch = () => {
    if (window.location.pathname === "/Search") return <Search />;
  };

  const showDropdown = () => {
    if (window.location.pathname === "/DropDown")
      return (
        <DropDown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label="Select a Color"
        />
      );
  };

  const showTranslate = () => {
    if (window.location.pathname === "/Translate") return <Translate />;
  };
  return (
    <div className="smooth">
      <Rout path="/">
        <Accordion items={items} />
      </Rout>

      <Rout path="/DropDown">
        <DropDown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label="Select a Color"
        />
      </Rout>
      <Rout path="/Search">
        <Search />
      </Rout>
      <Rout path="/Translate">
        <Translate />
      </Rout>
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
      {/* <hr /> */}
      {/* <Translate /> */}
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
