import React from "react";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { NavBar } from "./components/NavBar";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
