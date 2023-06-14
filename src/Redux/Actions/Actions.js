import { ActionTypes } from "../Constants/ActionCreator";
import baseApi from "../Apis/baseApi";
import baseLink from "../Apis/baseLink";

export const fetchData = () => async (dispatch) => {
  const response = await baseApi.get("/products");
  dispatch({
    type: ActionTypes.FETCH_DATA,
    payload: response.data.products,
  });
};

export const fetchProducts = () => async (dispatch) => {
  const ProductData = await baseLink.get("/products");
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: ProductData.data,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await baseApi.get(`/products/${id}`);
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};
