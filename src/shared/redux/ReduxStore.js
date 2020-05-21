import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import ReduxDevTools from "./ReduxDevTools";
import Reducers from "./reducers";

const composeFunctions = [applyMiddleware(ReduxThunk)];

if (ReduxDevTools) {
  composeFunctions.push(ReduxDevTools);
}

const store = createStore(Reducers, compose(...composeFunctions));

export default store;
