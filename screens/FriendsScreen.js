import React from "react";
import { StyleSheet, View } from "react-native";

import { friendsArrayData } from "../components/DummyData";
import FriendsList from "../components/FriendsList";

const FriendsScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <FriendsList data={friendsArrayData} navigation={props.navigation} />
    </View>
  );
};

export default FriendsScreen;

const styles = StyleSheet.create({});
