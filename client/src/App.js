import React from "react";
import { Dashboard } from "./components/layout/Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ClientsList } from "./components/ClientsList";
import { CarsList } from "./components/CarsList";
import { OperationsList } from "./components/OperationsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={CarsList} />
          <Route exact path="/clients" component={ClientsList} >Clients</Route>
          <Route exact path="/cars" component={CarsList} >Cars</Route>
          <Route exact path="/operations" component={OperationsList} >Operations</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
