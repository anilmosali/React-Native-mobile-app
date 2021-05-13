import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";

import { Ionicons, AntDesign } from "@expo/vector-icons";

const avatarSize = 70;
const spacing = 15;
const ITEMSIZE = avatarSize + spacing * 3;

const FriendsList = ({ data, navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/bg-blue.jpg")}
        style={[StyleSheet.absoluteFillObject]}
        blurRadius={50}
      />
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [-1, 0, ITEMSIZE * index, ITEMSIZE * (index + 3)];
          const scaleValue = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacityInputRange = [
            -1,
            0,
            ITEMSIZE * index,
            ITEMSIZE * (index + 2),
          ];
          const opacityValue = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={[
                styles.tile,
                { transform: [{ scale: scaleValue }], opacity: opacityValue },
              ]}
            >
              <View style={styles.touchableContainer}>
                <View style={styles.photo}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Details", {
                        personData: item,
                      });
                    }}
                  >
                    <Image source={item.imageUrl} style={styles.avatar} />
                  </TouchableOpacity>
                </View>
                <View style={styles.content}>
                  <View style={styles.personDetails}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Details", {
                          personData: item,
                        });
                      }}
                    >
                      <Text style={styles.title}>{item.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.otherText} numberOfLines={2}>
                      {item.additionalData.note}
                    </Text>
                  </View>
                  {/* <View style={styles.callAndText}>
                    <Ionicons name="call" size={24} color="black" />
                    <AntDesign name="message1" size={20} color="black" />
                  </View> */}
                </View>
              </View>
            </Animated.View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default FriendsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  flatList: {
    padding: spacing,
    paddingBottom: 60,
  },
  tile: {
    padding: spacing,
    //marginVertical: spacing,
    flexDirection: "row",
    marginBottom: spacing,
    backgroundColor: "#fff",
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
  touchableContainer: {
    flexDirection: "row",
  },
  photo: {
    width: "30%",
  },
  content: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    height: avatarSize,
    width: avatarSize,
    borderRadius: avatarSize,
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  otherText: {
    fontSize: 14,
    fontWeight: "300",
    opacity: 0.6,
  },
  callAndText: {
    //padding: 10,
    //flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
