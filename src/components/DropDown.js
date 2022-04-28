import React, { useState, useEffect, useRef } from "react";

export default ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // console.log(ref.current);

    const body = document.body;
    const handler = function (e) {
      // guard key that is if e.target is descendant of the ref.current this handler wont do a shit
      if (ref.current.contains(e.target)) return;

      setOpen(false);
      // console.log("body clicked");
    };
    body.addEventListener("click", handler, { capture: true });

    return () => body.removeEventListener("click", handler, true);
  }, []);

  // document.body.addEventListener("click", (e) => {
  //   setOpen(!open);
  //   console.log(e.target);
  // });

  ////////////////////////////////////////////      MAPING THE OPTIONS IN TO LISTS
  ////////////////////////////////////////////

  const renderOptions = options.map((opt, i) => {
    if (opt.value === selected.value) return null; // null in react means render nothing

    return (
      <div
        key={opt.value}
        className="item"
        onClick={() => {
          // console.log("item clicked");
          onSelectedChange(opt);
        }}
      >
        {opt.label}
      </div>
    );
  });

  /////////////////////////////////////////     THE WILL BE RENDERED VALUE
  ////////////////////////////////////////

  return (
    <div className="ui form" ref={ref}>
      <div className="ui field">
        <label className="label">{label}</label>
        <div
          onClick={(e) => {
            // console.log("div clicked");
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};
