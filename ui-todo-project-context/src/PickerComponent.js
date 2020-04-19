import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

export const PickerComponent = () => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={value}
        onValueChange={(el) => {
          setValue(el);
        }}
        style={{ height: 50, width: 150}}
      >
        <Picker.Item label="swift" value="swift" />
        <Picker.Item label="javaScript" value="js" />
        <Picker.Item label="react" value="react" />
        <Picker.Item label="native" value="native" />
        <Picker.Item label="redux" value="redux" />
        <Picker.Item label="java" value="java" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});
