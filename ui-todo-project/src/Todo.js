import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Todo = ({ todo }) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
      flexDirection: "row",
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'grey',
      marginBottom: 16,
      height: 34,
      borderRadius: 6,
      paddingLeft: 10


  },
});
