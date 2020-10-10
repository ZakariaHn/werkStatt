import React from "react";

import { NavBar } from "./components/navBar";
import { ButtonsContainer } from "./components/showListsButtons/buttonsContainer";
import { Content } from "./components/content";
function App() {
  return (
    <div className="container">
      <NavBar />

      <Content />

      <ButtonsContainer />
    </div>
  );
}

export default App;
