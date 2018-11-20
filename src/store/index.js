import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();

import { test } from "./reducers";
const store = createStore(test, undefined, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));
export default store;
