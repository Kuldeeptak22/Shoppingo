import { combineReducers } from "redux";
import {
  fetchDataReducer,
  selectedProductReducer,
  selectedRecipeReducer,
  selectedClothReducer,
} from "./reducers";
import { fetchFiltersReducer } from "../Reducers/FilterReducer";

const rootReducer = combineReducers({
  allProducts: fetchDataReducer,
  singleProduct: selectedProductReducer,
  singleRecipe: selectedRecipeReducer,
  singleCloth: selectedClothReducer,
  filters: fetchFiltersReducer,
});

export default rootReducer;
