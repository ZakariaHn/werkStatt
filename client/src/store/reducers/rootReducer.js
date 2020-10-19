import { combineReducers } from "redux";
import clientsReducer from "./clientsReducer";
import carsReducer from "./carsReducer";

const rootReducer = combineReducers({
  clients: clientsReducer,
  cars: carsReducer,
});

export default rootReducer;
