import { ActionTypes } from "../Constants/ActionCreator";

const initialState = {
  products: [],
  allData: [],
  allRecipes: [],
  filteredData: [],
};

export const fetchDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, allData: payload };
    case ActionTypes.FETCH_RECIPES:
      return { ...state, allRecipes: payload };
    case ActionTypes.SEND_FILTERS:
      const productList = state.products;
      const { id, name } = payload;
      let x = [];
      x = productList.filter((item) => item.category === name);
      return { ...state, filteredData: x };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const selectedRecipeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_RECIPE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const selectedClothReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_CLOTH:
      return { ...state, ...payload };
    default:
      return state;
  }
};
