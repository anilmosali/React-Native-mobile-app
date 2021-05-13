import React, { useReducer, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.value,
        inputValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const InputText = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    inputValue: props.initialValue ? props.initialValue : "",
    inputValid: true,
    touched: false,
  });

  const validateDate = (dateString) => {
    let dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/;

    // Match the date format through regular expression
    if (dateString.match(dateformat)) {
      let operator = dateString.split("-");

      // Extract the string into month, date and year
      let datepart = [];
      if (operator.length > 1) {
        datepart = dateString.split("-");
      }
      let day = parseInt(datepart[0]);
      let month = parseInt(datepart[1]);
      let year = parseInt(datepart[2]);

      // Create list of days of a month
      let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (month == 1 || month > 2) {
        if (day > ListofDays[month - 1]) {
          ///This check is for Confirming that the date is not out of its range
          return false;
        }
      } else if (month == 2) {
        let leapYear = false;
        if ((!(year % 4) && year % 100) || !(year % 400)) {
          leapYear = true;
        }
        if (leapYear == false && day >= 29) {
          return false;
        } else if (leapYear == true && day > 29) {
          //console.log('Invalid date format!');
          return false;
        }
      }
    } else {
      //console.log("Invalid date format!");
      return false;
    }
    return true;
  };
  const textChangeHandler = (text) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    if (props.date) {
      isValid = validateDate(text);
    }
    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  const { onInputChange, label } = props;

  useEffect(() => {
    //console.log(inputState);
    if (inputState.touched) {
      onInputChange(label, inputState.inputValue, inputState.inputValid);
    }
  }, [inputState, onInputChange, label]);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={{ ...styles.textInput, ...props.style }}
        value={inputState.inputValue}
        placeholder={props.placeholder}
        placeholderTextColor={
          props.placeholderTextColor
            ? props.placeholderTextColor
            : "rgba(92, 92, 92,0.6)"
        }
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
      />
      {!inputState.inputValid && (
        <Text style={styles.errorLabel}>{props.errorText}</Text>
      )}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    //width: "100%",
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    //backgroundColor: "red",
  },
  textInput: {
    width: "80%",
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    fontSize: 18,
    color: "black",
    fontWeight: "600",
    textAlign: "center",
  },
  errorLabel: {
    color: "rgba(255, 30, 31,0.8)",
  },
});
