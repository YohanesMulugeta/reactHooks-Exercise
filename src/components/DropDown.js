import React, { useState, useEffect } from "react";

export default ({ options, selected, onSelectedChange }) => {
  const renderOptions = options.map((opt, i) => {
    return (
      <div
        key={opt.value}
        className="item"
        onClick={() => {
          onSelectedChange(opt);
        }}
      >
        {opt.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="ui field">
        <label className="label">Selection</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderOptions}</div>
        </div>
      </div>
    </div>
  );
};
