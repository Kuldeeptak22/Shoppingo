import { ActionTypes } from "../Constants/ActionCreator";
import baseApi from "../Apis/baseApi";
import baseLink from "../Apis/baseLink";
import baseFoodApi from "../Apis/baseFoodApi";
import FilterApi from "../Apis/FiltersApi/FilterApi";

export const fetchData = () => async (dispatch) => {
  const response = await baseApi.get("/products");
  try {
    dispatch({
      type: ActionTypes.FETCH_DATA,
      payload: response.data.products,
    });
  } catch (Error) {
    console.error(Error);
  }
};

export const fetchProducts = () => async (dispatch) => {
  const ProductData = await baseLink.get("/products");
  try {
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: ProductData.data,
    });
  } catch (Error) {
    console.error(Error);
  }
};

export const fetchRecipes = () => async (dispatch) => {
  const ProductData = await baseFoodApi.get("");
  try {
    dispatch({
      type: ActionTypes.FETCH_RECIPES,
      payload: ProductData.data.hits,
    });
  } catch (Error) {
    console.error(Error);
  }
};
export const fetchFilters = () => async (dispatch) => {
  const Filters = await FilterApi.get("/shop");
  try {
    dispatch({
      type: ActionTypes.FETCH_FILTERS,
      payload: Filters.data.filtersOthers,
    });
  } catch (Error) {
    console.error(Error);
  }
};
export const sendFilters = (data) => {
  try {
    return {
      type: ActionTypes.SEND_FILTERS,
      payload: data,
    };
  } catch (Error) {
    console.error(Error);
  }
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await baseApi.get(`/products/${id}`);
  try {
    dispatch({
      type: ActionTypes.SELECTED_PRODUCT,
      payload: response.data,
    });
  } catch (Error) {
    console.error(Error);
  }
};

export const fetchSingleCloth = (id) => async (dispatch) => {
  const response = await baseLink.get(`/products/${id}`);
  try {
    dispatch({
      type: ActionTypes.SELECTED_CLOTH,
      payload: response.data,
    });
  } catch (Error) {
    console.error(Error);
  }
};

export const fetchSingleRecipe = (getindex) => async (dispatch) => {
  const response = await baseFoodApi.get("");
  const result = response.data.hits;
  const Prodata =
    result &&
    result.map((fetchData, index) => {
      if (index === getindex) {
        return fetchData.recipe;
      }
    });
  const filteredProData = Prodata.filter(
    (selectedRec) => selectedRec !== undefined
  );
  try {
    dispatch({
      type: ActionTypes.SELECTED_RECIPE,
      payload: filteredProData[0],
    });
  } catch (Error) {
    console.error(Error);
  }
};
