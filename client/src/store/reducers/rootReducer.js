import { combineReducers } from "redux";
import clientsReducer from "./clientsReducer";
import carsReducer from "./carsReducer";
import operationsReducer from "./operationsReducer";
import { targetReducer } from "./targetReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  clients: clientsReducer,
  cars: carsReducer,
  operations: operationsReducer,
  target: targetReducer
});

export default rootReducer;
