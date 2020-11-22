import securityReducer from "./securityReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  security: securityReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
