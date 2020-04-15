import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../../theme";
import { AppCard } from "../components/ui/AppCard";

export const TodoScreen = ({ goBack, todo, onRemove }) => {
         return (
           <View>
             <AppCard style={styles.card}>
               <Text style={styles.title}>{todo.title}</Text>
               <Button title="Edit" />
             </AppCard>

             <View style={styles.buttons}>
               <View style={styles.button}>
                 <Button
                   title="Back"
                   onPress={goBack}
                   color={THEME.GREY_COLOR}
                 />
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
