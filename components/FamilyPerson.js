import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { personsArray } from "./DummyData";

const tileHeight = 120;
const spacing = 15;

const FamilyPerson = ({ data }) => {
  const renderData = data.node.map((item, index) => {
    if (index % 2 == 0) {
      return personsArray.find((element) => element.id === item);
    } else {
      return item;
    }
  });

  //no need of your data
  renderData.splice(0, 1);
  //store the final person to be shown in a separate variable
  const profilePerson = renderData.pop();

  return (
    <View style={styles.tileContainer}>
      <View style={styles.name}>
        <Text style={styles.headerText}>{profilePerson.name}</Text>
      </View>
      <View style={styles.content}>
        <ScrollView
          horizontal
          centerContent
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          <View style={styles.relationContainer}>
            <Text style={styles.you}> Your </Text>

            {renderData.map((item, index, arr) => {
              if (index % 2 != 0) {
                return (
                  <View key={index.toString()} style={styles.tileItem}>
                    <Image source={item.imageUrl} style={styles.photo} />
                    <Text numberOfLines={1}>{item.name}</Text>
                  </View>
                );
              } else if (index == arr.length) {
              } else {
                return (
                  <View key={index.toString()} style={styles.relationArrow}>
                    <Text style={styles.you}>{item}</Text>
                    <Entypo name="arrow-long-right" size={40} color="black" />
                  </View>
                );
              }
            })}
          </View>
        </ScrollView>
        <View style={styles.profilePersonContainer}>
          <Image source={profilePerson.imageUrl} style={styles.profilePerson} />
        </View>
      </View>
    </View>
  );
};

export default FamilyPerson;

const styles = StyleSheet.create({
  tileContainer: {
    marginBottom: spacing,
    marginHorizontal: 10,
    height: tileHeight,
    width: "100%",
    backgroundColor: "white",
    //overflow: "hidden",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    borderRadius: 15,
    shadowRadius: 10,
    elevation: 10,
  },
  name: {
    height: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "white",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "800",
    padding: spacing / 3,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
    height: tileHeight - 20,
    width: "100%",
    //backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  profilePersonContainer: {
    width: "20%",
    height: 80,
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  profilePerson: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  scrollView: {
    //borderWidth: 2,
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "center",
  },
  relationContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  relationArrow: {
    alignItems: "center",
    justifyContent: "center",
  },
  you: {
    // fontFamily: "open-sans-bold",
    fontSize: 12,
    fontWeight: "500",
    marginBottom: -10,
  },
  tileItem: {
    width: 75,
    marginHorizontal: spacing / 2,
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    //borderColor: "green",
    //borderWidth: 2,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
