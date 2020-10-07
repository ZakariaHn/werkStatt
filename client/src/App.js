import React from "react";
import { ClientsList } from "./components/ClientsList";
import { CarsList } from "./components/CarsList";

function App() {
  return (
    <div className="App">
      <ClientsList />
      <CarsList />
    </div>
  );
}

export default App;
