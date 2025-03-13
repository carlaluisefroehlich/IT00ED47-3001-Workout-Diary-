import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TotalDistance() {
  const [totalKilometers, setTotalKilometers] = useState(0);

  useEffect(() => {
    calculateTotalDistance();
  }, []);

  const calculateTotalDistance = async () => {
    try {
      const storedWorkouts = JSON.parse(await AsyncStorage.getItem("workouts")) || [];
      
      // Summiere alle Kilometerwerte aus den gespeicherten Workouts
      const total = storedWorkouts.reduce((sum, workout) => sum + parseFloat(workout.kilometers || 0), 0);

      setTotalKilometers(total);
    } catch (error) {
      console.error("Fehler beim Berechnen der Gesamtstrecke:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Distance</Text>
      <Text style={styles.distance}>{totalKilometers.toFixed(2)} km</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  distance: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#388E32",
  },
});
