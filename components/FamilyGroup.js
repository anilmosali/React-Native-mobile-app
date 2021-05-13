import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const FamilyGroup = ({ data }) => {
  const user = data[0].person1;
  return (
    <View style={{}}>
      <Text>{user}</Text>
      {data.map((item, index) => {
        return (
          <View key={`FG_Person_${index}`}>
            <Text>{item.person2}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default FamilyGroup;

const styles = StyleSheet.create({});
