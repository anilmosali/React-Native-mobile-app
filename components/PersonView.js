import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  Dimensions,
  Linking,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const { height, width } = Dimensions.get("screen");
const IMAGE_WIDTH = width * 0.8;

const spacing = 10;

const PersonView = ({ item, navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 40 }}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingBottom: 30,
        // alignItems: "center",
        // justifyContent: "center"
      }}
    >
      <View
        style={{
          height: 40,
          width: 40,
          position: "absolute",
          left: 10,
          top: Platform.OS === "ios" ? StatusBar.currentHeight + 5 : 5,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="md-arrow-back-sharp" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          //flexDirection: "row",
          margin: spacing,
          padding: spacing,
          marginTop: 40,
          //justifyContent: "center",
        }}
      >
        <View
          style={{
            ...styles.shadow,
            padding: spacing,
            borderRadius: spacing,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={item.imageUrl}
            style={{
              height: IMAGE_WIDTH * 1.2,
              width: IMAGE_WIDTH,
              borderRadius: spacing * 1.5,
            }}
          />
        </View>
        <View
          style={{
            padding: 5,
            marginVertical: 10,
          }}
        >
          <Animatable.Text
            animation="flipInX"
            delay={500}
            duration={500}
            style={[
              styles.textStyle,
              {
                fontWeight: "bold",
                fontSize: 20,
                alignSelf: "center",
                marginBottom: 15,
                paddingHorizontal: 15,
              },
            ]}
          >
            {item.name}
          </Animatable.Text>
          <Animatable.Text
            animation="zoomInUp"
            delay={1000}
            duration={500}
            style={[
              styles.textStyle,
              {
                fontWeight: "700",
                fontSize: 17,
                opacity: 0.8,
              },
            ]}
          >
            Family Name: {item.familyName}
          </Animatable.Text>
          <Animatable.Text
            animation="zoomInUp"
            delay={1500}
            duration={500}
            style={styles.textStyle}
          >
            Birthday: {item.dob}
          </Animatable.Text>
          <Animatable.Text
            animation="zoomInUp"
            delay={2000}
            duration={500}
            style={styles.textStyle}
          >
            Currently in: {item.currentPlace}
          </Animatable.Text>
          <Animatable.Text
            animation="zoomInUp"
            delay={2500}
            duration={500}
            style={styles.textStyle}
          >
            Occupation: {item.occupation}
          </Animatable.Text>
        </View>
        <View>
          <View style={{ alignContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  marginHorizontal: 10,
                  ...styles.shadow,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    Platform.OS == "ios"
                      ? Linking.openURL(`tel:${item.phone}`)
                      : Linking.openURL(`telprompt:${item.phone}`);
                  }}
                >
                  <Ionicons name="md-call" size={30} color="black" />
                </TouchableOpacity>
              </View>
              <Animatable.Text
                animation="pulse"
                delay={3000}
                duration={500}
                iterationCount={5}
                style={{
                  fontSize: 15,
                  opacity: 0.7,
                  fontWeight: "600",
                  ...styles.textStyle,
                }}
                onPress={() => {
                  Platform.OS == "ios"
                    ? Linking.openURL(`tel:${item.phone}`)
                    : Linking.openURL(`telprompt:${item.phone}`);
                }}
              >
                {item.phone}
              </Animatable.Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PersonView;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { height: 5, width: 0 },
    elevation: 10,
  },
  textStyle: {
    fontSize: 14,
    padding: 5,
    fontWeight: "600",
    marginVertical: 5,
    opacity: 0.8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "darkgrey",
  },
});
