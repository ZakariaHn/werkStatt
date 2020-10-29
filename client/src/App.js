import React from "react";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { Navbar } from "./components/NavBar";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
