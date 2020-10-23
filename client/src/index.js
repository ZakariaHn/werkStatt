import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/scss/main.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ModalProvider } from "react-modal-hook";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
