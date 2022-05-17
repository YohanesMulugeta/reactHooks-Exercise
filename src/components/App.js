import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Route from "./Route";
import Search from "./Search";
import Translate from "./Translate";
import Header from "./Header";

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

// const showAccordion = () => {
//   if (window.location.pathname === "/") return <Accordion items={items} />;
// };

// const showList = () => {
//   if (window.location.pathname === "/list") return <Search />;
// };

// const showDropdown = (selected, setSelected) => {
//   if (window.location.pathname === "/dropdown")
//     return (
//       <Dropdown
//         options={options}
//         title="Select a Color"
//         selected={selected}
//         onSelectedChange={setSelected}
//       />
//     );
// };
// const showTranslate = () => {
//   if (window.location.pathname === "/translate") return <Translate />;
// };

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="">
      {/* {showAccordion()}
      {showDropdown(selected, setSelected)}
      {showList()}
      {showTranslate()} */}
      <Header />

      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          title="Select Color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
