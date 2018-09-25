import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  devToolsEnhancer,
  composeWithDevTools
} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

export default () => {
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
