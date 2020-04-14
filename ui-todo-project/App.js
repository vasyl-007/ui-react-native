import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Navbar } from "./src/Navbar";
import { PickerComponent } from "./src/PickerComponent";
import { SwitchComponent } from "./src/SwitchComponent";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello React Navitve!!!</Text> */}
      <Navbar title="Todo App"/>
      <PickerComponent />
      <SwitchComponent />
    </View>
  );
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "purple",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   //   container2: {
//   // flex: 1,
//   //     backgroundColor: "green",
//   //     justifyContent: "center",
//   //     alignItems: "center",
//   //   },
//   text: {
//     fontSize: 30,
//     color: "white",
//     textAlign: "center",
//   },
});
