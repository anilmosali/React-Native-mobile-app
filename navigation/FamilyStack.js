import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FamilyScreen from "../screens/FamilyScreen";
import PersonDetails from "../screens/PersonDetails";

const Stack = createStackNavigator();

const FamilyStack = (props) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={FamilyScreen} />
      <Stack.Screen name="Details" component={PersonDetails} />
    </Stack.Navigator>
  );
};

export default FamilyStack;
