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
  skipFamilyAndFriendsScreenFlag: false,
};

const authenticationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        email: payload.email,
        isLoggedIn: true,
        skipFamilyAndFriendsScreenFlag: true,
      };
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
    case actionTypes.USER_SIGNOUT:
      return initialState;
    case actionTypes.ADD_USER_DETAILS_ON_SIGNUP:
      return {
        ...state,
        skipFamilyAndFriendsScreenFlag: true,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  auth: authenticationReducer,
});

export default reducers;
