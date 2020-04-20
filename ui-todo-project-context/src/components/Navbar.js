import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { THEME } from "../theme";

export const Navbar = (props) => {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({
          ios: styles.navbarIos,
          android: styles.navbarAndroid,
        }),
      }}
    >
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: '#3949ab',
    // backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10,
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIos: {
    backgroundColor: THEME.MAIN_COLOR,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    color: Platform.OS === "ios" ? "#000" : "white",
    fontSize: 20,
  },
});
