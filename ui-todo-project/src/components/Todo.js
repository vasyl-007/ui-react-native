import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemoveTodo, onOpen }) => {
  //   const handlerDel = () => {
  //     onRemoveTodo(todo.id);
  //   };
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={() => onOpen(todo.id)}
      // onPress={() => console.log("Pressed todo.id", todo.id)}
      //   onLongPress={() => onRemoveTodo(todo.id)}
      onLongPress={onRemoveTodo.bind(null, todo.id)}
      //   onLongPress={handlerDel}
    >
      <View style={styles.todo}>
        <Text style={styles.title}>{todo.title}</Text>
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
    marginBottom: 26,
    height: 36,
    borderRadius: 6,
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    // color: 'white'
  },
});
