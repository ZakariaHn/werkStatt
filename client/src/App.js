import React from "react";
import { ComponentsHolder } from "./components/content/ComponentsHolder";
import { Footer } from "./components/footer";
import { Navbar } from "./components/NavBar";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <ComponentsHolder />
      <Footer />
    </div>
  );
};

export default App;
