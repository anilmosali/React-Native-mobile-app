import { userProfileActionTypes as actionTypes } from "../constants";

export const toggleFamilyView = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.TOGGLE_FAMILY_VIEW });
  };
};
