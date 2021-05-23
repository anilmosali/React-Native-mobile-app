import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userProfileReducer from "./userProfileReducer";

const reducers = combineReducers({
  auth: authReducer,
  user: userProfileReducer,
});

export default reducers;
