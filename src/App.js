import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
