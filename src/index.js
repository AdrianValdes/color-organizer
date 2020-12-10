import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ColorProvider } from "./color-hooks";

export const ColorContext = createContext();

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("root")
);
