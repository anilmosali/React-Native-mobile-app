import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 10,
    borderRadius: 10,
    padding: 10,
    //backgroundColor: "white",
  },
});

export default Card;
