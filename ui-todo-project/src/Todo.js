import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemoveTodo }) => {
  //   const handlerDel = () => {
  //     onRemoveTodo(todo.id);
  //   };
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={() => console.log("Pressed todo.id", todo.id)}
      //   onLongPress={() => onRemoveTodo(todo.id)}
      onLongPress={onRemoveTodo.bind(null, todo.id)}
      //   onLongPress={handlerDel}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 16,
    height: 34,
    borderRadius: 6,
    paddingLeft: 10,
  },
});
