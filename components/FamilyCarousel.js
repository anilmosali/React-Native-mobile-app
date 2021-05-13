import React, { useRef } from "react";
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import FamilyGroup from "./FamilyGroup";
// import * as Animatable from "react-native-animatable";
// import { StatusBar } from "expo-status-bar";

const bgColors = [
  "#9998ff",
  "#f0f0ff",
  "#f5f5dc",
  "#ffe4c4",
  "#fff8dc",
  "#fffaf0",
  "#f0fff0",
  "#fffff0",
  "#e6e6fa",
  "#fffacd",
  "#ffffe0",
  "#ffe4b5",
];
let bgColorIndex = 0;
const { height, width } = Dimensions.get("screen");

const spacing = 10;
const ITEM_HEIGHT = height * 0.75;
const ITEM_WIDTH = width * 0.75;
const SPACER_WIDTH = (width - ITEM_WIDTH) / 2;

const FamilyCarousel = ({ data, navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const familyTree = data.familyTree;
  const relations = data.relations;
  const personsArray = data.personsArray;

  const user = familyTree.user;
  const treeNodes = familyTree.nodes.map((item) => item.id);

  let flatlistData = [];
  let filteredArray = [];
  let filtersToBeApplied = [user];

  const nextNodes = (person, filtersToBeApplied) => {
    return relations.filter(
      (item) =>
        (item.person1 === person) & !filtersToBeApplied.includes(item.person2)
    );
  };

  const listGenerator = (person) => {
    filteredArray = nextNodes(person, filtersToBeApplied);
    if (filteredArray.length) {
      filteredArray.forEach((item) => filtersToBeApplied.push(item.person2));
      flatlistData.push(filteredArray);
      filteredArray.forEach((element) => {
        listGenerator(element.person2);
      });
    }
  };

  listGenerator(user);

  //Add Dummy spacer to the start and end to create a carousel effect
  const finalDataArray = [
    { key: "left-spacer" },
    ...flatlistData,
    { key: "right-spacer" },
  ];
  //dummy spacers logic end
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImageBackground
        source={require("../assets/bg-blue.jpg")}
        style={[StyleSheet.absoluteFillObject]}
        blurRadius={50}
      />
      <Animated.FlatList
        keyExtractor={(item, index) => `FL_Item_${index}`}
        data={finalDataArray}
        horizontal
        showsHorizontalScrollIndicator={false}
        //pagingEnabled
        snapToInterval={ITEM_WIDTH}
        decelerationRate={0}
        contentContainerStyle={{
          alignItems: "center",
          // justifyContent: "center",
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (item.key == "left-spacer" || item.key == "right-spacer") {
            return <View style={{ width: SPACER_WIDTH }} />;
          }
          const inputRange = [
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
          ];
          const inputRangeOpacity = [
            (index - 0.5) * width,
            index * width,
            (index + 0.5) * width,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [ITEM_WIDTH * 0.5, ITEM_WIDTH, ITEM_WIDTH * 0.5],
          });
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });

          if (bgColors.length <= bgColorIndex) {
            bgColorIndex = 0;
          } else {
            bgColorIndex = bgColorIndex + 1;
          }

          //console.log(inputRange, outputRange);
          const knownPersonID = item[0].person1;
          const knownPerson = personsArray.find(
            (item) => item.id === knownPersonID
          );
          //this determines whose data to populate in the family details
          let keyPersonID = knownPersonID;

          const groupMemberIDs = item;
          const groupMembers = groupMemberIDs.map((e) => {
            if (e.relationship == "father") {
              keyPersonID = e.person2;
            } else if (e.relationship == "mother") {
              keyPersonID = e.person2;
            } else if (e.relationship == "mother") {
              keyPersonID = e.person2;
            }
            return {
              relationship: e.relationship,
              person: personsArray.find((element) => element.id === e.person2),
            };
          });
          const keyPerson = personsArray.find(
            (item) => item.id === keyPersonID
          );

          return (
            <View
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
              }}
            >
              {/* <View
                style={{
                  height: ITEM_HEIGHT,
                  width: ITEM_WIDTH,
                  //backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              > */}
              <Animated.View
                style={{
                  // height: ITEM_HEIGHT,
                  // width: ITEM_WIDTH,
                  flex: 1,
                  marginHorizontal: spacing,
                  padding: spacing,
                  //paddingHorizontal: 60,
                  backgroundColor: bgColors[bgColorIndex],
                  //margin: spacing,
                  borderRadius: spacing,
                  ...styles.shadow,

                  // opacity: scrollX.interpolate({
                  //   inputRange: inputRangeOpacity,
                  //   outputRange: [0.5, 1, 0.5],
                  // }),

                  transform: [
                    {
                      // scale: scrollX.interpolate({
                      //   inputRange,
                      //   outputRange: [0.8, 1, 0.8],
                      // }),
                      translateY,
                    },
                  ],
                }}
              >
                <ScrollView style={{}}>
                  <View
                    style={{
                      marginTop: 30,
                      borderTopWidth: 2,
                      borderTopColor: "#000",
                      //backgroundColor: "#fff",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Details", {
                          personData: knownPerson,
                          //relationship: knownPerson,
                        });
                      }}
                    >
                      <Animated.Image
                        source={knownPerson.imageUrl}
                        style={{
                          marginTop: -30,
                          marginLeft: 20,
                          height: 60,
                          width: 60,
                          borderRadius: 30,
                          transform: [
                            {
                              scale: scrollX.interpolate({
                                inputRange,
                                outputRange: [0, 1.1, 0],
                              }),
                            },
                          ],
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        marginLeft: 5,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#808080",
                      }}
                    >
                      {knownPerson.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      padding: 10,
                      borderBottomColor: "#eee",
                      borderBottomWidth: 2,
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {groupMembers.map((i, index) => {
                      return (
                        <TouchableOpacity
                          key={i.person.id}
                          onPress={() => {
                            navigation.navigate("Details", {
                              personData: i.person,
                              //relationship: i.relationship,
                            });
                          }}
                        >
                          <View
                            style={{
                              margin: 10,
                              alignItems: "center",
                              justifyContent: "center",
                              maxWidth: ITEM_WIDTH / 3.1,
                            }}
                          >
                            <Text
                              style={{
                                fontWeight: "bold",
                                color: "#262626",
                                fontSize: 15,
                              }}
                            >
                              {i.relationship.toUpperCase()}
                            </Text>

                            <Image
                              source={i.person.imageUrl}
                              style={{
                                height: 80,
                                width: 80,
                                borderRadius: 40,
                              }}
                            />
                            <Text
                              style={{
                                fontWeight: "bold",
                                color: "#4a4a4a",
                                fontSize: 14,
                              }}
                            >
                              {i.person.name}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: "row", marginVertical: 5 }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Family Name:{" "}
                      </Text>
                      <Text style={{ fontSize: 15, fontWeight: "600" }}>
                        {keyPerson.familyName}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 5 }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Native:
                      </Text>
                      <Text style={{ fontSize: 15, fontWeight: "600" }}>
                        {keyPerson.nativePlace}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 5 }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Parents Current Location:
                      </Text>
                      <Text style={{ fontSize: 15, fontWeight: "600" }}>
                        {keyPerson.currentPlace}
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              </Animated.View>
            </View>
          );
        }}
      />
      {/* {flatlistData.map((_, i) => {
        console.log(i);
        return (
          <View
            key={() => {
              `swipe-left-${i}`;
            }}
            style={{
              position: "absolute",
              bottom: 50,
              left: 10,
              height: 40,
              width: 40,
            }}
          >
            <MaterialCommunityIcons
              name="gesture-swipe-left"
              size={40}
              color="black"
            />
          </View>
        );
      })} */}
    </SafeAreaView>
  );
};

export default FamilyCarousel;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowRadius: 20,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.6,
  },
});
