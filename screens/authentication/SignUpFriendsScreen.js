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
  Dimensions,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";
import { useDispatch } from "react-redux";

import InputText from "../../components/InputText";
import { addFamilyNFriends } from "../../store/actions/authActions";
import {
  FORM_INPUT_UPDATE,
  formReducer,
} from "../../components/reactFormReducer/ReactFormReducer";

const SignUpFriendsScreen = (props) => {
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      familyName: "",
      name: "",
      gender: "",
      isMarried: false,
      phone: "",
      email: "",
    },
    inputValidities: {
      familyName: false,
      name: false,
      gender: false,
      isMarried: false,
      phone: false,
      email: false,
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
  const skipHandler = () => {
    reduxDispatch(addFamilyNFriends(formState.inputValues));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={["#fff", "#f0f0f0", "#f2f2f2"]}
        style={styles.linearGradient}
      >
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback
            style={{ flex: 1 }}
            onPress={() => Keyboard.dismiss()}
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              style={{ flex: 1, marginTop: Platform.OS === "ios" ? 0 : 30 }}
            >
              <View style={styles.signUpContainer}>
                <View style={styles.headerContainer}>
                  <Text style={styles.header1}>Let's Add Your Friends</Text>
                </View>
                <View style={styles.familyContainer}>
                  <View style={styles.personContainer}>
                    <Text style={styles.personName}>Best Friend:</Text>

                    <InputText
                      label="bf1SurName"
                      required
                      autoCorrect={false}
                      autoCapitalize="words"
                      placeholder="Family Name"
                      placeholderTextColor="rgba(0,0,0,0.2)"
                      errorText="Family Name Should be atleast 2 characters"
                      minLength={2}
                      style={styles.textInput}
                      onInputChange={inputChangeHandler}
                    />
                    <InputText
                      label="bf1Name"
                      required
                      autoCorrect={false}
                      autoCapitalize="words"
                      placeholder="Name"
                      placeholderTextColor="rgba(0,0,0,0.2)"
                      errorText="Name should be atleast 4 letter long"
                      minLength={4}
                      style={styles.textInput}
                      onInputChange={inputChangeHandler}
                    />
                    <InputText
                      label="bf1Dob"
                      required
                      autoCorrect={false}
                      placeholder="Birthday: DD-MM-YY"
                      placeholderTextColor="rgba(0,0,0,0.2)"
                      errorText="Please enter valid Birthday as DD-MM-YYYY"
                      date={true}
                      style={styles.textInput}
                      onInputChange={inputChangeHandler}
                    />
                    <View
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ModalDropdown
                        options={["Male", "Female"]}
                        style={styles.modalDropDown}
                        textStyle={styles.modalText}
                        defaultValue="Select Gender"
                        dropdownTextStyle={styles.modalText}
                        dropdownStyle={styles.dropDownContainer}
                        onSelect={(index, value) => {
                          if (index >= 0) {
                            return inputChangeHandler("bf1Gender", value, true);
                          }
                        }}
                      />
                    </View>
                    <InputText
                      label="bf1Phone"
                      required
                      autoCorrect={false}
                      autoCapitalize="words"
                      placeholder="Eg: (country code)(Phone number)"
                      placeholderTextColor="rgba(0,0,0,0.2)"
                      keyboardType="phone-pad"
                      errorText="Please enter correct Phone Number"
                      minLength={12}
                      maxLength={13}
                      style={styles.textInput}
                      onInputChange={inputChangeHandler}
                    />
                  </View>
                  <View style={styles.personContainer}>
                    <Text style={styles.personName}>One More Best Friend:</Text>

                    <InputText
                      label="bf2SurName"
                      required
                      autoCorrect={false}
                      autoCapitalize="words"
                      placeholder="Family Name"
                      placeholderTextColor="rgba(0,0,0,0.2)"
                      errorText="Family Name Should be atleast 2 characters"
                      minLength={2}
                      style={styles.textInput}
                      onInputChange={inputChangeHandler}
                    />
                    <InputText
                      label="bf2Name"
                      required
                      autoCorrect={false}
                      autoCapitalize="words"
                      placeholder="Name"
                      placeholderTextColor="rgba(0,0,0,0.2)"
                      errorText="Name should be atleast 4 letter long"
                      minLength={4}
                      style={styles.textInput}
                      onInputChange={inputChangeHandler}
                    />
                    <InputText
                      label="bf2Dob"
                      required
                      autoCorrect={false}
                      placeholder="Birthday: DD-MM-YY"
                      placeholderTextColor="rgba(0,0,0,0.2)"
                      errorText="Please enter valid Birthday as DD-MM-YYYY"
                      date={true}
                      style={styles.textInput}
                      onInputChange={inputChangeHandler}
                    />
                    <View
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ModalDropdown
                        options={["Male", "Female"]}
                        style={styles.modalDropDown}
                        textStyle={styles.modalText}
                        defaultValue="Select Gender"
                        dropdownTextStyle={styles.modalText}
                        dropdownStyle={styles.dropDownContainer}
                        onSelect={(index, value) => {
                          if (index >= 0) {
                            return inputChangeHandler("bf2Gender", value, true);
                          }
                        }}
                      />
                    </View>
                    <InputText
                      label="bf1Phone"
                      required
                      autoCorrect={false}
                      autoCapitalize="words"
                      placeholder="Eg: (country code)(Phone number)"
                      placeholderTextColor="rgba(0,0,0,0.2)"
                      keyboardType="phone-pad"
                      errorText="Please enter correct Phone Number"
                      minLength={12}
                      maxLength={13}
                      style={styles.textInput}
                      onInputChange={inputChangeHandler}
                    />
                  </View>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Text
                      style={{ fontSize: 13, opacity: 0.6, fontWeight: "bold" }}
                    >
                      Don't Worry You can add or update people later
                    </Text>

                    <View style={styles.buttonContainer}>
                      <View style={styles.button}>
                        <TouchableOpacity
                          style={styles.buttonIcon}
                          onPress={() => {
                            console.log(formState);
                            props.navigation.goBack();
                          }}
                        >
                          <MaterialIcons
                            name="navigate-before"
                            size={40}
                            color="white"
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.button}>
                        <TouchableOpacity
                          style={styles.buttonIcon}
                          onPress={() => {
                            console.log(formState);
                            props.navigation.navigate("friendsSignUp", {
                              userData: formState.inputValues,
                            });
                          }}
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
                        onPress={skipHandler}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0,0,0,0.8)",
                            padding: 5,
                            paddingLeft: 10,
                            borderRadius: 12,
                          }}
                        >
                          <Text style={{ color: "#fff", fontWeight: "800" }}>
                            Skip for now
                          </Text>
                          <MaterialIcons
                            name="navigate-next"
                            size={40}
                            color="white"
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUpFriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("window").height,
  },
  signUpContainer: {
    flex: 1,
  },
  headerContainer: {
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
    //marginBottom: 20,
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
  familyContainer: {
    flex: 1,
    marginTop: 10,
  },
  personContainer: {
    width: "95%",
    padding: 10,
    margin: 10,
    // borderTopWidth: 1,
    // borderTopColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  personName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.7)",
    shadowColor: "grey",
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    elevation: 5,
  },
  textInput: {
    width: 200,
    color: "#016949",
    fontWeight: "700",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderWidth: 1,
    borderRadius: 10,
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
  modalDropDown: {
    padding: 5,
    width: "50%",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderWidth: 1,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#016949",
    width: "100%",
  },
  dropDownContainer: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.4)",
    width: 140,
    height: 80,
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
