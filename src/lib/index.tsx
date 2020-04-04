import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "~lib/style/Theme";
import { GlobalStyle } from "~lib/style/Global";

const root = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  root
);
