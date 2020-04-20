import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { THEME } from "../theme";

export const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
  );

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width);
    };
    Dimensions.addEventListener("change", update);

    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });

  let content = (
    <View style={{ width: deviceWidth }}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemoveTodo={removeTodo} onOpen={openTodo} />
        )}
      />
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
    width: 320,
    height: 390,
    resizeMode: "contain",
  },
});
