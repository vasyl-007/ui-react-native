import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { THEME } from "../../../theme";

export const AppButton = ({children, onPress, color=THEME.MAIN_COLOR) => (
  <TouchableOpacity style={{ ...styles.default, ...props.style }}>{props.children}
  <View>
      <AppTextBold></AppTextBold>
  </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  default: {
    fontFamily: "roboto-regular",
  },
});
