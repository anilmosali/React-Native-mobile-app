import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import PersonView from "../components/PersonView";

const PersonDetails = (props) => {
  const { personData } = props.route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#fff",
      }}
    >
      <PersonView item={personData} navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default PersonDetails;

const styles = StyleSheet.create({});
