import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FriendsScreen from "../screens/FriendsScreen";
import PersonDetails from "../screens/PersonDetails";

const Stack = createStackNavigator();

const FriendsStack = (props) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={FriendsScreen} />
      <Stack.Screen name="Details" component={PersonDetails} />
    </Stack.Navigator>
  );
};

export default FriendsStack;
