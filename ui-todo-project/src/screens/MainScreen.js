import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {
  let content = (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemoveTodo={removeTodo} onOpen={openTodo} />
        )}
      />
      <View>
        <ImageBackground
          source={require("../../assets/task-management-bg.png")}
          style={styles.backImage}
        ></ImageBackground>
      </View>
    </View>
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          source={require("../../assets/no-results.png")}
          style={styles.img}
        />
        {/* <Image
          source={{
            uri:
              "https://cdn.dribbble.com/users/158194/screenshots/6398178/empty_state-01_2x.jpg",
          }}
          style={styles.img}
        /> */}
      </View>
    );
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo} />

      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  img: {
    width: 380,
    height: 300,
    resizeMode: "cover",
  },
  backImage: {
    height: 250,
    resizeMode: "contain",
  },
});
