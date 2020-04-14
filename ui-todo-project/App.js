import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import shortId from "shortid";
import { Navbar } from "./src/Navbar";
import { PickerComponent } from "./src/PickerComponent";
import { SwitchComponent } from "./src/SwitchComponent";
import { AddTodo } from "./src/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: shortId(),
      title,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
  return (
    <View>
      {/* <Text style={styles.text}>Hello React Navitve!!!</Text> */}
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <View>
          {todos.map((todo) => {
            return <Text key={todo.id}>{todo.title}</Text>;
          })}
        </View>
      </View>
      {/* <PickerComponent />
      <SwitchComponent /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  //   container: {
  //     flex: 1,
  //     backgroundColor: "purple",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   text: {
  //     fontSize: 30,
  //     color: "white",
  //     textAlign: "center",
  //   },
});
