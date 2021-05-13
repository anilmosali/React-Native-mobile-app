import React, { useReducer, useCallback } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InputText from "../../components/InputText";
import Card from "../../components/Card";
import * as Animatable from "react-native-animatable";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      isFormValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const UserLoginScreen = (props) => {
  const { navigation } = props;
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      username: "",
      password: "",
    },
    inputValidities: {
      username: false,
      password: false,
    },
    isFormValid: false,
  });

  // const animatedValue = React.useRef(new Animated.Value(0)).current;
  // const inputRange = [0,1];
  // const outputRange = []

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={["#016949", "#007552", "#03a170"]}
          style={styles.linearGradient}
        >
          <Animatable.View
            animation="zoomInDown"
            duration={1000}
            delay={200}
            style={styles.logoContainer}
          >
            <Image
              source={require("../../assets/logo.png")}
              style={styles.image}
            />
            <Text style={styles.logoText}>Kutumbakam</Text>
          </Animatable.View>
          <Animatable.View
            animation="flipInX"
            duration={800}
            delay={300}
            style={styles.animatableContainer}
          >
            <Card style={styles.card}>
              <InputText
                label="username"
                required
                email
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="User Name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                errorText="Please enter correct User Name"
                minLength={7}
                style={styles.textInput}
                onInputChange={inputChangeHandler}
              />
              <InputText
                label="password"
                required
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                errorText="Please enter correct Password"
                minLength={8}
                style={styles.textInput}
                onInputChange={inputChangeHandler}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  if (formState.isFormValid) {
                    //add redux logic here to login
                  }
                }}
              >
                <Text style={styles.signin}>SignIn</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signUpView}
                onPress={() => {
                  console.log(formState);
                  navigation.navigate("signup");
                }}
              >
                <Text style={styles.signUpText}>Not an User? SignUp Here!</Text>
              </TouchableOpacity>
            </Card>
          </Animatable.View>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UserLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  logoText: {
    margin: 10,
    fontSize: 35,
    color: "white",
    fontWeight: "800",
    letterSpacing: 2,
  },
  animatableContainer: {
    width: "90%",
  },
  card: {
    width: "100%",
    height: 300,
    backgroundColor:
      Platform.OS === "android" ? "transparent" : "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
  },

  textInput: {
    minWidth: 150,
    color: "#fff",
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  signin: {
    fontWeight: "600",
    fontSize: 18,
    color: "white",
  },
  signUpView: {
    marginTop: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  signUpText: {
    color: "white",
    fontSize: 13,
    padding: 2,
  },
});
