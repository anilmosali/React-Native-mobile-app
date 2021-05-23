import { Alert } from "react-native";
import actionTypes from "../constants";
import firebase from "../../firebase/fireConfig";

export const userSignUp = (user) => {
  //console.log(user);
  return async (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        user.updateProfile({
          displayName: user.name,
          //photoURL: "https://example.com/jane-q-user/profile.jpg",
        });

        dispatch({
          type: actionTypes.USER_SIGNUP,
          payload: user,
        });
        // ...
      })
      .catch((error) => {
        let errorMessage = error.message;
        Alert.alert("Something Wrong", errorMessage, [
          { text: "Retry", onPress: () => console.log("Retrying Login") },
        ]);
      });
  };
};

export const addFamilyNFriends = (userData) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.ADD_USER_DETAILS_ON_SIGNUP,
      payload: userData,
    });
  };
};

export const userLogin = (user) => {
  return async (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.username, user.password)
      .then((userCredential) => {
        // Signed in
        //console.log(userCredential.user);
        dispatch({
          type: actionTypes.USER_LOGIN,
          payload: user,
        });
        // ...
      })
      .catch((error) => {
        let errorMessage = error.message;
        Alert.alert("Something Wrong", errorMessage, [
          { text: "Retry", onPress: () => console.log("Retrying Login") },
        ]);
      });
  };
};

export const userSignOut = () => {
  return async (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        dispatch({
          type: actionTypes.USER_SIGNOUT,
        });
      })
      .catch((error) => {
        // An error happened.
        let errorMessage = error.message;
        Alert.alert("Something Wrong", errorMessage, [
          { text: "Retry", onPress: () => console.log("Retrying Login") },
        ]);
      });
  };
};
