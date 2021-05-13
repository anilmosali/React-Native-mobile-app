import React from "react";
//import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import FamilyScreen from "../screens/FamilyScreen";
import FriendsScreen from "../screens/FriendsScreen";
import ChatScreen from "../screens/ChatScreen";
import TraditionsScreen from "../screens/TraditionsScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const bottomStack = createMaterialBottomTabNavigator();

const HomeBottomNavigator = () => {
  return (
    <bottomStack.Navigator
      initialRouteName="Family"
      barStyle={{
        backgroundColor: "#016949",
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowOffset: { height: -5, width: 0 },
        elevation: 5,
      }}
      shifting={true}
    >
      <bottomStack.Screen
        name="Family"
        component={FamilyScreen}
        options={{
          tabBarIcon: (focused, color, size) => {
            return <Ionicons name="ios-home" size={24} color="white" />;
          },
        }}
      />
      <bottomStack.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: (focused, color, size) => {
            return <Ionicons name="people" size={24} color="white" />;
          },
        }}
      />
      <bottomStack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: (focused, color, size) => {
            return (
              <Ionicons
                name="chatbubble-ellipses-sharp"
                size={24}
                color="white"
              />
            );
          },
        }}
      />
      <bottomStack.Screen
        name="Traditions"
        component={TraditionsScreen}
        options={{
          tabBarIcon: (focused, color, size) => {
            return <AntDesign name="profile" size={24} color="white" />;
          },
        }}
      />
      <bottomStack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: (focused, color, size) => {
            return <FontAwesome5 name="user-edit" size={24} color="white" />;
          },
        }}
      />
    </bottomStack.Navigator>
  );
};

export default HomeBottomNavigator;
