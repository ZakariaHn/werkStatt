import React from "react";
import "./App.css";
import { ClientsList } from "./components/ClientsList";
import { RegisterClient } from "./components/RegisterClient";

function App() {
  return (
    <div className="App">
      <ClientsList />
    </div>
  );
}

export default App;
