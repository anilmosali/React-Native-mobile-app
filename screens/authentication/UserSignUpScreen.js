import React, { useReducer, useCallback } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";
import * as Animatable from "react-native-animatable";
import { useDispatch } from "react-redux";

import { userSignUp } from "../../store/actions/actions";
import InputText from "../../components/InputText";

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

const UserSignUpScreen = (props) => {
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      familyName: "",
      name: "",
      gender: "",
      isMarried: false,
      phone: "",
      email: "",
      password: "",
    },
    inputValidities: {
      familyName: false,
      name: false,
      gender: false,
      isMarried: false,
      phone: false,
      email: false,
      password: false,
    },
    formIsValid: false,
  });

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
  const reduxDispatch = useDispatch();
  const signUpHandler = () => {
    console.log(formState);
    if (formState.isFormValid) {
      reduxDispatch(userSignUp(formState.inputValues));
      // props.navigation.navigate("familySignUp", {
      //   userData: formState.inputValues,
      // });
    } else {
      console.log(" Pressed SignUp but Form is not Valid");
    }
  };

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => Keyboard.dismiss()}
    >
      <LinearGradient
        colors={["#f2f2f2", "#f0f0f0", "#fff"]}
        style={styles.linearGradient}
      >
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            enabled={true}
          >
            <ScrollView>
              <View style={styles.signUpContainer}>
                <Animatable.View
                  animation="pulse"
                  delay={800}
                  duration={1000}
                  iterationCount={15}
                  useNativeDriver={true}
                  style={styles.headerContainer}
                >
                  <Text style={styles.header1}>Let's Add Your Details</Text>
                </Animatable.View>
                <View style={styles.inputField}>
                  <Text style={styles.questionText}>
                    What's your Sur Name/Family Name?
                  </Text>

                  <InputText
                    label="familyName"
                    required
                    autoCorrect={false}
                    autoCapitalize="words"
                    placeholder="Family Name"
                    placeholderTextColor="rgba(0,0,0,0.2)"
                    errorText="Please enter correct Family Name"
                    minLength={2}
                    style={styles.textInput}
                    onInputChange={inputChangeHandler}
                  />
                </View>

                <View style={styles.inputField}>
                  <Text style={styles.questionText}>What's your Name?</Text>

                  <InputText
                    label="name"
                    required
                    autoCorrect={false}
                    autoCapitalize="words"
                    placeholder="Your Name"
                    placeholderTextColor="rgba(0,0,0,0.2)"
                    errorText="Please enter correct Name"
                    minLength={4}
                    style={styles.textInput}
                    onInputChange={inputChangeHandler}
                  />
                </View>

                <View style={styles.inputField}>
                  <Text style={styles.questionText}>Gender?</Text>
                  <ModalDropdown
                    options={["Male", "Female"]}
                    style={styles.genderDropDown}
                    textStyle={styles.genderText}
                    dropdownTextStyle={styles.genderText}
                    dropdownStyle={styles.dropDownContainer}
                    onSelect={(index, value) => {
                      if (index >= 0) {
                        inputChangeHandler("gender", value, true);
                      }
                    }}
                  />
                </View>

                <View style={styles.inputField}>
                  <Text style={styles.questionText}>Are You Married?</Text>
                  <ModalDropdown
                    options={["Yes", "No"]}
                    style={styles.genderDropDown}
                    textStyle={styles.genderText}
                    dropdownTextStyle={styles.genderText}
                    dropdownStyle={styles.dropDownContainer}
                    onSelect={(index, value) => {
                      inputChangeHandler("isMarried", value, true);
                    }}
                  />
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.questionText}>Your Phone number?</Text>

                  <InputText
                    label="phone"
                    required
                    autoCorrect={false}
                    autoCapitalize="words"
                    placeholder="Eg: (country code)(Phone number)"
                    placeholderTextColor="rgba(0,0,0,0.2)"
                    keyboardType="phone-pad"
                    errorText="Please enter correct Phone Number"
                    minLength={10}
                    maxLength={13}
                    style={styles.textInput}
                    onInputChange={inputChangeHandler}
                  />
                </View>

                <View style={styles.inputField}>
                  <Text style={styles.questionText}>You have an email?</Text>

                  <InputText
                    label="email"
                    required
                    email
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Email Address"
                    keyboardType="email-address"
                    placeholderTextColor="rgba(0,0,0,0.2)"
                    errorText="Please enter correct Email"
                    minLength={8}
                    style={styles.textInput}
                    onInputChange={inputChangeHandler}
                  />
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.questionText}>Create Password:</Text>

                  <InputText
                    label="password"
                    required
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Create Password"
                    placeholderTextColor="rgba(0,0,0,0.2)"
                    errorText="Please enter valid Password Email"
                    minLength={8}
                    style={styles.textInput}
                    onInputChange={inputChangeHandler}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                    <TouchableOpacity
                      style={styles.buttonIcon}
                      onPress={signUpHandler}
                    >
                      <MaterialIcons
                        name="navigate-next"
                        size={40}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                      props.navigation.goBack();
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        padding: 5,
                        paddingRight: 10,
                        borderRadius: 12,
                      }}
                    >
                      <MaterialIcons
                        name="navigate-before"
                        size={40}
                        color="white"
                      />
                      <Text style={{ color: "#fff", fontWeight: "800" }}>
                        {" "}
                        Take me back to Login
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default UserSignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  back: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 30,
    height: 30,
  },
  signUpContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  headerContainer: {
    width: "100%",
    //height: 40,
    margin: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  header1: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    elevation: 5,
  },
  inputField: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },

  questionText: {
    fontWeight: "600",
    fontSize: 18,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    elevation: 5,
  },
  textInput: {
    color: "#016949",
    fontWeight: "700",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 200,
  },
  genderDropDown: {
    padding: 10,

    backgroundColor: "rgba(255,255,255,0.9)",
    borderWidth: 1,
    borderRadius: 10,
  },
  genderText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#016949",
  },
  dropDownContainer: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.4)",
    width: 140,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "60%",
    //height: "20%",
    alignItems: "center",
    justifyContent: "center",
    //alignContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    elevation: 5,
  },
  buttonIcon: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(1, 105, 74, 0.9)",
  },
});
