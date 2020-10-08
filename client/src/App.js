import React from "react";
import { ClientsList } from "./components/ClientsList";
import { CarsList } from "./components/CarsList";
import { OperationsList } from "./components/OperationsList";

function App() {
  return (
    <div className="App">
      <ClientsList />
      <CarsList />
      <OperationsList />
    </div>
  );
}

export default App;
