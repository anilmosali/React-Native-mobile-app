import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Switch } from "react-native";

import { personsArray, relations, familyTree } from "../components/DummyData";
import FamilyCarousel from "../components/FamilyCarousel";
import FamilyList from "../components/FamilyList";

//console.log("flatlist as Object array with key", flatlistData);
const data = {
  personsArray,
  relations,
  familyTree,
};
const FamilyScreen = (props) => {
  const [listView, setListView] = useState(false);
  const toggleView = () => setListView((previousState) => !previousState);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <View style={{ position: "absolute", top: 40, right: 10 }}>
        <Switch
          trackColor={{ false: "#3e3e3e", true: "#dcdcdc" }}
          thumbColor={listView ? "#016949" : "grey"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleView}
          value={listView}
        />
      </View> */}

      {/* <FamilyList data={data} /> */}
      <FamilyCarousel data={data} navigation={props.navigation} />
    </View>
  );
};

export default FamilyScreen;

const styles = StyleSheet.create({});
