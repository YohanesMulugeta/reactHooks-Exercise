import React from "react";

const Link = ({ className, href, children }) => {
  // on click event handler
  const onclick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      //   console.log(e.ctrlKey);
      return;
    }
    e.preventDefault();
    // keeping the content on the screen async with the url
    window.history.pushState({}, "", href);

    // this will comunicato to route components that url has changed
    const navEvent = new Event("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onclick}>
      {children}
    </a>
  );
};

export default Link;
