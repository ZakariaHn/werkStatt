import React from "react";
import { NavBar } from "./components/NavBar";
import { ToggleLists } from "./components/ToggleLists";
import { Content } from "./components/Content";
import { AddingDataButtons } from "./components/AddingDataButtons";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Content />
      <ToggleLists />
      <AddingDataButtons />
    </div>
  );
};

export default App;
