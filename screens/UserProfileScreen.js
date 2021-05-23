import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";

import { userSignOut } from "../store/actions/authActions";
import { toggleFamilyView } from "../store/actions/userProfileActions";

const UserProfileScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const reduxDispatch = useDispatch();

  //toggle switch
  const toggleSwitchHandler = () => {
    setIsEnabled((previousState) => !previousState);
    reduxDispatch(toggleFamilyView());
  };

  //SignOut function
  const signOutHandler = () => {
    reduxDispatch(userSignOut());
  };
  //Singout END

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: 50, alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 20,
          }}
        >
          <Image
            source={require("../assets/fnf/family/2.jpg")}
            style={{ height: 200, width: 200, borderRadius: 15 }}
          />
        </View>
        <View
          style={{
            height: "15%",
            width: "95%",
            borderTopWidth: 1,
            borderTopColor: "#d1d1d1",
            borderBottomWidth: 1,
            borderBottomColor: "#d1d1d1",
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              paddingLeft: 10,
              fontSize: 15,
              fontWeight: "bold",
              paddingBottom: 2,
            }}
          >
            Show Family Tree as
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "bold", marginRight: 15 }}>
              Groups
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#a3a3a3" }}
              thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchHandler}
              value={isEnabled}
            />
            <Text style={{ fontSize: 17, fontWeight: "bold", marginLeft: 15 }}>
              Individuals
            </Text>
          </View>
        </View>
        <View
          style={{
            height: "10%",
            width: "95%",
            borderBottomWidth: 1,
            borderBottomColor: "#d1d1d1",
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
          >
            <FontAwesome name="user-plus" size={24} color="black" />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 15,
              }}
            >
              Add a Family Member
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "10%",
            width: "95%",
            borderBottomWidth: 1,
            borderBottomColor: "#d1d1d1",
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
          >
            <FontAwesome name="user-plus" size={24} color="black" />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 15,
              }}
            >
              Add a Friend
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "10%",
            width: "95%",
            borderBottomWidth: 1,
            borderBottomColor: "#d1d1d1",
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
          >
            <MaterialIcons name="post-add" size={24} color="black" />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 15,
              }}
            >
              Add an Event
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "10%",
            width: "95%",
            borderBottomWidth: 1,
            borderBottomColor: "#d1d1d1",
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            onPress={signOutHandler}
          >
            <MaterialCommunityIcons name="logout" size={24} color="black" />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 15,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
});
