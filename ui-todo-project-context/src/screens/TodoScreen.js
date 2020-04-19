import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };

  const [devWidth, setDevWidth] = useState(
    Dimensions.get("window").width / 3.3
  );

  useEffect(() => {
    const update = () => {
      const buttonWidth = Dimensions.get("window").width / 3.3;
      setDevWidth(buttonWidth);
    };
    Dimensions.addEventListener("change", update);

    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });

  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
        value={todo.title}
      />

      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <AntDesign.Button
          onPress={() => setModal(true)}
          name="edit"
          style={{ paddingRight: 12 }}
        >
          Edit
        </AntDesign.Button>
        {/* <Button title="Edit" onPress={() => setModal(true)} /> */}
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AntDesign.Button
            onPress={goBack}
            backgroundColor={THEME.GREY_COLOR}
            name="back"
          >
            BACK
          </AntDesign.Button>

          {/* <Button title="Back" onPress={goBack} color={THEME.GREY_COLOR} /> */}
        </View>
        <View style={styles.button}>
          <FontAwesome.Button
            // color="#c53935"
            onPress={() => onRemove(todo.id)}
            // color={THEME.DANGER_COLOR}
            name="remove"
            backgroundColor={THEME.DANGER_COLOR}
          >
            DELETE
          </FontAwesome.Button>
          {/* <Button
            title="Delete"
            color="#c53935"
            onPress={() => onRemove(todo.id)}
            color={THEME.DANGER_COLOR}
          /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginBottom: 20,
    padding: 20,
  },
  button: {
    width: "32%",
    // width: devWidth,
    // width: Dimensions.get("window").width / 3.3,
    // width: Dimensions.get('window').width > 400 ? 150 : 110
  },
  title: {
    fontSize: 22,
  },
});
