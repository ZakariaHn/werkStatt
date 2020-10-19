import { combineReducers } from "redux";
import clientsReducer from "./clientsReducer";
import carsReducer from "./carsReducer";
import operationsReducer from "./operationsReducer";

const rootReducer = combineReducers({
  clients: clientsReducer,
  cars: carsReducer,
  operations: operationsReducer,
});

export default rootReducer;
