import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserLoginScreen from "../screens/authentication/UserLoginScreen";
import UserSignUpScreen from "../screens/authentication/UserSignUpScreen";

const Stack = createStackNavigator();

const AuthNavigator = (props) => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="login">
      <Stack.Screen name="login" component={UserLoginScreen} />
      <Stack.Screen name="signup" component={UserSignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
