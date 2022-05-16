import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

if (module.hot) {
  module.hot.accept();
}

// RENDERING the App component
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
