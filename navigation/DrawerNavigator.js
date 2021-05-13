import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeBottomNavigator from "./HomeBottomNavigator";
import { AntDesign } from "@expo/vector-icons";
import MyBottomTabNavigator from "./MyBottomTabNavigator";

const drawerStack = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <drawerStack.Navigator>
      {/* <drawerStack.Screen name="Home" component={HomeBottomNavigator} /> */}
      <drawerStack.Screen name="Home" component={MyBottomTabNavigator} />
    </drawerStack.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
