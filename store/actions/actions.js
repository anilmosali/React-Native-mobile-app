import { Alert } from "react-native";
import actionTypes from "../constants";
import firebase from "../../firebase/fireConfig";

export const userSignUp = (user) => {
  console.log(user);
  return async (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        // Signed in
        // let user = userCredential.user;
        // user
        //   .updateProfile({
        //     displayName: "Jane Q. User",
        //     photoURL: "https://example.com/jane-q-user/profile.jpg",
        //   })
        //   .then(function () {
        //     // Update successful.
        //   })
        //   .catch(function (error) {
        //     // An error happened.
        //   });

        dispatch({
          type: actionTypes.USER_SIGNUP,
          payload: user,
        });
        // ...
      })
      .catch((error) => {
        console.log(error);
        new Error("Something Wrong in User Creation Process");
        Alert.alert(
          "Something Wrong",
          "Something Wrong in User Creation Process",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
      });
  };
};

export const userLogin = (user) => {
  return async (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
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
