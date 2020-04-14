import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import shortId from "shortid";
import { Navbar } from "./src/Navbar";
import { PickerComponent } from "./src/PickerComponent";
import { SwitchComponent } from "./src/SwitchComponent";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([
    { id: "id-10", title: "Task 10" },
    { id: "id-9", title: "Task 9" },
    { id: "id-8", title: "Task 8" },
    { id: "id-7", title: "Task 7" },
    { id: "id-6", title: "Task 6" },
    { id: "id-5", title: "Task 5" },
    { id: "id-4", title: "Task 4" },
    { id: "id-3", title: "Task 3" },
    { id: "id-2", title: "Task 2" },
    { id: "id-1", title: "Task 1" },
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: shortId(),
      title,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <View>
      {/* <Text style={styles.text}>Hello React Navitve!!!</Text> */}
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} onRemoveTodo={removeTodo} />
          )}
        />

        {/* <ScrollView>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ScrollView> */}
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
});
