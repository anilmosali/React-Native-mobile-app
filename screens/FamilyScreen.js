import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import { personsArray, relations, familyTree } from "../components/DummyData";
import FamilyCarousel from "../components/FamilyCarousel";
import FamilyList from "../components/FamilyList";

const data = {
  personsArray,
  relations,
  familyTree,
};
const FamilyScreen = (props) => {
  const currentFlag = useSelector((state) => state.user.showGroups);
  console.log("showing groups:", currentFlag);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {currentFlag ? (
        <FamilyCarousel data={data} navigation={props.navigation} />
      ) : (
        <FamilyList data={data} />
      )}
    </View>
  );
};

export default FamilyScreen;

const styles = StyleSheet.create({});
