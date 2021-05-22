import { combineReducers } from "redux";

import actionTypes from "../constants";

const initialState = {
  familyName: "",
  name: "",
  gender: "",
  isMarried: false,
  phone: "",
  email: "",
  isLoggedIn: false,
};

const authenticationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGIN:
      return { ...state, email: payload.email, isLoggedIn: true };
    case actionTypes.USER_SIGNUP:
      return {
        ...state,
        familyName: payload.familyName,
        name: payload.name,
        gender: payload.gender,
        isMarried: payload.isMarried,
        phone: payload.phone,
        email: payload.email,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  auth: authenticationReducer,
});

export default reducers;
