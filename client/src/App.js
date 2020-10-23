import React from "react";
import { NavBar } from "./components/NavBar";
import { ToggleLists } from "./components/ToggleLists";
import { Content } from "./components/Content";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <ToggleLists />
      <Content />
    </div>
  );
};

export default App;
