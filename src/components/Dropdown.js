import React from "react";

const Dropdown = ({ options, title, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
    // KEY GUARD....
    if (option.value === selected.value) return;

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          // ====================================== SENDING DATA from child to parent
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{title}</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
