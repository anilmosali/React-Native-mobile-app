import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserSignUpScreen from "../screens/authentication/UserSignUpScreen";
import SignUpFamilyScreen from "../screens/authentication/SignUpFamilyScreen";
import SignUpFriendsScreen from "../screens/authentication/SignUpFriendsScreen";

const Stack = createStackNavigator();

const SingUpStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="singUp" component={UserSignUpScreen} />
      <Stack.Screen name="familySignUp" component={SignUpFamilyScreen} />
      <Stack.Screen name="friendsSignUp" component={SignUpFriendsScreen} />
    </Stack.Navigator>
  );
};

export default SingUpStackNavigator;
