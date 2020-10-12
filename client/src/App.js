import React from "react";

import { NavBar } from "./components/navBar";
import { ToggleLists } from "./components/showListsButtons/toggleLists";
import { Content } from "./components/content";
import { AddingDataButtons } from "./components/addingDataButtons";
function App() {
  return (
    <div className="container">
      <NavBar />
      <Content />
      <ToggleLists />
      <AddingDataButtons />
    </div>
  );
}

export default App;
