import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import shortId from "shortid";
import { Navbar } from "./src/components/Navbar";
import { PickerComponent } from "./src/PickerComponent";
import { SwitchComponent } from "./src/SwitchComponent";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);

  const [todos, setTodos] = useState([
    // { id: "id-10", title: "Task 10" },
    // { id: "id-9", title: "Task 9" },
    // { id: "id-8", title: "Task 8" },
    // { id: "id-7", title: "Task 7" },
    // { id: "id-6", title: "Task 6" },
    // { id: "id-5", title: "Task 5" },
    // { id: "id-4", title: "Task 4" },
    // { id: "id-3", title: "Task 3" },
    // { id: "id-2", title: "Task 2" },
    // { id: "id-1", title: "Task 1" },
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: shortId(),
      title,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodo = (id) => {
    const todo = todos.find((el) => el.id === id);
    Alert.alert(
      "Removing the task",
      `Do you want to delete "${todo.title}"?`,
      [
        {
          text: "Cancel",
          // onPress: () => console.log("Cancel Pressed"),
          style: "negative",
        },
        {
          text: "Delete",
          style: "positive",
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((item) => item.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          item.title = title;
        }
        return item;
      })
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
      // openTodo={(id) => {
      //   setTodoId(id);
      // }}
    />
  );
  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }
  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        {content}
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
