import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };
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
        <Button title="Edit" onPress={() => setModal(true)} />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Back" onPress={goBack} color={THEME.GREY_COLOR} />
        </View>
        <View style={styles.button}>
          <Button
            title="Delete"
            color="#c53935"
            onPress={() => onRemove(todo.id)}
            color={THEME.DANGER_COLOR}
          />
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
    width: "34%",
  },
  title: {
    fontSize: 22,
  },
});
