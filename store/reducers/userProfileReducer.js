import { userProfileActionTypes as actionTypes } from "../constants";

const initialState = {
  showGroups: true,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAMILY_VIEW:
      let currentFlag = state.showGroups;
      return { ...state, showGroups: !currentFlag };
    default:
      return state;
  }
};

export default userProfileReducer;
