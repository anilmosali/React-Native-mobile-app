import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FamilyStack from "./FamilyStack";
import FriendsStack from "./FriendsStack";
import ChatScreen from "../screens/ChatScreen";
import TraditionsScreen from "../screens/TraditionsScreen";
import UserProfileScreen from "../screens/UserProfileScreen";

const stack = createBottomTabNavigator();

const MyBottomTabNavigator = (props) => {
  return (
    <stack.Navigator
      tabBarOptions={{
        style: {
          position: "absolute",
          backgroundColor: "#fff",
          height: "10%",
          shadowColor: "black",
          shadowOpacity: 0.3,
          shadowRadius: 5,
          shadowOffset: { height: -3, width: 0 },
          elevation: 3,
        },
      }}
    >
      <stack.Screen
        name="Family"
        component={FamilyStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  borderTopWidth: focused ? 5 : 0,
                  borderTopColor: focused ? "#007556" : null,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/family.png")}
                  style={{ height: 30, width: 30 }}
                />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  paddingBottom: 5,
                  fontSize: 10,
                  color: focused ? "#000" : "grey",
                }}
              >
                Family
              </Text>
            );
          },
        }}
      />
      <stack.Screen
        name="Friends"
        component={FriendsStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  paddingVertical: 5,
                  borderTopWidth: focused ? 5 : 0,
                  borderTopColor: focused ? "#007556" : null,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/friend.png")}
                  style={{ height: 30, width: 30 }}
                />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  paddingBottom: 5,
                  fontSize: 10,
                  color: focused ? "#000" : "grey",
                }}
              >
                Friends
              </Text>
            );
          },
        }}
      />
      <stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  paddingVertical: 5,
                  borderTopWidth: focused ? 5 : 0,
                  borderTopColor: focused ? "#007556" : null,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/chat.png")}
                  style={{ height: 30, width: 30 }}
                />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  paddingBottom: 5,
                  fontSize: 10,
                  color: focused ? "#000" : "grey",
                }}
              >
                Discussion
              </Text>
            );
          },
        }}
      />
      <stack.Screen
        name="Events"
        component={TraditionsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  paddingVertical: 5,
                  borderTopWidth: focused ? 5 : 0,
                  borderTopColor: focused ? "#007556" : null,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/confetti.png")}
                  style={{ height: 30, width: 30 }}
                />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  paddingBottom: 5,
                  fontSize: 10,
                  color: focused ? "#000" : "grey",
                }}
              >
                Traditions
              </Text>
            );
          },
        }}
      />
      <stack.Screen
        name="User"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  paddingVertical: 5,
                  borderTopWidth: focused ? 5 : 0,
                  borderTopColor: focused ? "#007556" : null,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/user.png")}
                  style={{ height: 30, width: 30 }}
                />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  paddingBottom: 5,
                  fontSize: 10,
                  color: focused ? "#000" : "grey",
                }}
              >
                Profile
              </Text>
            );
          },
        }}
      />
    </stack.Navigator>
  );
};

export default MyBottomTabNavigator;
