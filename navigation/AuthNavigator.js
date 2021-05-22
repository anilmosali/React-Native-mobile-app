import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserLoginScreen from "../screens/authentication/UserLoginScreen";
import SingUpStackNavigator from "./SingUpStackNavigator";

const Stack = createStackNavigator();

const AuthNavigator = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUpFlag = () => {
    setIsSignUp((toggleFlag) => !toggleFlag);
  };

  return (
    <Stack.Navigator headerMode="none" initialRouteName="login">
      <Stack.Screen name="login" component={UserLoginScreen} />
      <Stack.Screen name="signup" component={SingUpStackNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;