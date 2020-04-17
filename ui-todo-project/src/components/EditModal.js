import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Alert,
} from "react-native";
import { THEME } from "../../theme";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const handlerSubmit = () => {
    if (title.trim().length <= 3) {
      Alert.alert(
        "Sorry, this is invalid text!",
        `Changed text should be longer than 3 symbols. Now it is ${title.trim().length} sybmols`
      );
    } else {
      onSave(title);
    }
  };
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Enter text..."
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
          value={title}
          onChangeText={setTitle}
          //   onChangeText={(title) => setTitle(title)}
        />
        <View style={styles.button}>
          <Button title="Cancel" onPress={onCancel} color={THEME.GREY_COLOR} />
          <Button title="Save" onPress={handlerSubmit} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  button: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
