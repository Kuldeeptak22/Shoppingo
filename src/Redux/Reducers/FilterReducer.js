import { ActionTypes } from "../Constants/ActionCreator";

const initialState = {
  filterList: [],
};

export const fetchFiltersReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FETCH_FILTERS:
      return { ...state, filterList: payload };
    default:
      return state;
  }
};
