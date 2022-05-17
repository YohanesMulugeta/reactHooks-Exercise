import React, { useEffect, useState } from "react";

const Dropdown = ({ options, title, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest(".dropi") && open) setOpen(!open);
    };

    document.body.addEventListener("click", handler);

    return () => document.body.removeEventListener("click", handler);
  });

  const renderedOptions = options.map((option) => {
    // KEY GUARD....
    if (option.value === selected.value) return null;

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          // ====================================== SENDING DATA from child to parent
          // console.log("item");
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form dropi">
      <div className="field">
        <label className="label">{title}</label>
        <div
          onClick={() => {
            console.log("paren");
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
