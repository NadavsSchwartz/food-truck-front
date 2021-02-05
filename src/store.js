// Redux store
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import currentAccount from "./reducers/currentAccount";
import loginReducer from "./reducers/loginReducer";
import signupReducer from "./reducers/signupReducer";
import foodtruckReducer from "./reducers/foodtruckReducer";

import thunk from "redux-thunk";

// displaying different syntax options
const reducer = combineReducers({
  currentAccount,
  loginReducer,
  signupReducer,
  foodtruckReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
