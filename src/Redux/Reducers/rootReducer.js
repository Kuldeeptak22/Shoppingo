import { combineReducers } from "redux";
import { fetchDataReducer, selectedProductReducer } from "./reducers";

const rootReducer = combineReducers({
  allProducts: fetchDataReducer,
  singleProduct: selectedProductReducer,
});

export default rootReducer;
