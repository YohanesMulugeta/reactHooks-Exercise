import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, title, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      // GUARD KEY
      if (ref.current.contains(e.target)) return; //========================= ref.current is where the ref attached to will be stored

      console.log("clicked");
      setOpen(false);
    };

    document.body.addEventListener("click", handler);

    return document.body.removeEventListener("click", handler);
  }, []);

  const renderedOptions = options.map((option) => {
    // KEY GUARD....
    if (option.value === selected.value) return null;

    //  ================================================================= lists of OPTIONS =======================
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

  // =====================================================  DROPDOWN RENDERED RETURN =============================

  return (
    <div className="ui form dropi" ref={ref}>
      <div className="field">
        <label className="label">{title}</label>
        <div
          onClick={() => {
            // console.log("paren");
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
