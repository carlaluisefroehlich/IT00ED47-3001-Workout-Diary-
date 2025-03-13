import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function DurationInput({ setMinutes }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter duration (min)"
      keyboardType="numeric"
      onChangeText={(text) => setMinutes(text)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});
