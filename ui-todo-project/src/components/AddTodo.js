import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Keyboard,
  Alert,
} from "react-native";
import { THEME } from "../../theme";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const getValue = (text) => {
    setValue(text);
  };

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Task can't be an empty");
      Keyboard.dismiss();
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={getValue}
        // onChangeText={(text) => setValue(text)}
        // onChangeText={setValue}
        placeholder="Enter new task..."
        autoCorrect={true}
        autoCapitalize="sentences"
        keyboardType="numbers-and-punctuation"
      />
      <Button title="Add new task" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  input: {
    width: "60%",
    padding: 8,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: THEME.MAIN_COLOR,
    fontSize: 20,
  },
});
