import React from "react";

import { NavBar } from "./components/navBar";
import { ToggleLists } from "./components/showListsButtons/toggleLists";
import { Content } from "./components/content";
function App() {
  return (
    <div className="container">
      <NavBar />
      <Content />
      <ToggleLists />
    </div>
  );
}

export default App;
