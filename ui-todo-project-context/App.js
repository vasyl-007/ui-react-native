import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";

import { MainLayout } from "./src/MainLayout";
import { TodoState } from "./src/context/todo/TodoState";

export default function App() {
  return (
    <TodoState>
      <MainLayout />
    </TodoState>
  );
}
