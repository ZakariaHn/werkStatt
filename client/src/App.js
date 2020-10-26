import React from "react";
// import { NavBar } from "./components/NavBar";
import { ToggleLists } from "./components/ToggleLists";
import { ComponentsHolder } from "./components/content/ComponentsHolder";

const App = () => {
  return (
    <div className="container">
      {/* <NavBar /> */}
      <ToggleLists />
      <ComponentsHolder />
    </div>
  );
};

export default App;
