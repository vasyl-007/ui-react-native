import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const pressHandler = () => {
    onSubmit("test todo");
  };
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Add new task" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    // marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "60%",
    padding: 8,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
});
