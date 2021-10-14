import { combineReducers } from "redux";
import products from "./product/reducers";

const reducers = combineReducers({
  products
});

export default reducers;