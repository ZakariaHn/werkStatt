import { combineReducers } from "redux";
import clientsReducer from "./clientsReducer";
import carsReducer from "./carsReducer";
import operationsReducer from "./operationsReducer";
import { targetReducer } from "./targetReducer";

const rootReducer = combineReducers({
  clients: clientsReducer,
  cars: carsReducer,
  operations: operationsReducer,
  target: targetReducer,
});

export default rootReducer;
