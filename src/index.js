import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: black;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
