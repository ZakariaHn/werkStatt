import React from "react";
import { ToggleLists } from "./components/ToggleLists";
import { ComponentsHolder } from "./components/content/ComponentsHolder";

const App = () => {
  return (
    <div className="container">
      <ToggleLists />
      <ComponentsHolder />
    </div>
  );
};

export default App;
