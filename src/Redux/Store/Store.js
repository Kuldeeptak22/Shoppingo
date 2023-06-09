import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import rootReducer from "../Reducers/rootReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
