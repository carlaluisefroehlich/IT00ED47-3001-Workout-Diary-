import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function DistanceInput({ setKilometers }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter distance (km)"
      keyboardType="numeric"
      onChangeText={(text) => setKilometers(text)} // Hier sicherstellen, dass die Funktion aufgerufen wird
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
