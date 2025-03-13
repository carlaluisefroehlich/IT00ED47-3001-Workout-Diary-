import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Distances({ sportType }) {
  const [totalKilometers, setTotalKilometers] = useState(0);

  useEffect(() => {
    calculateSportDistance();
  }, []);

  const calculateSportDistance = async () => {
    try {
      const storedWorkouts = JSON.parse(await AsyncStorage.getItem("workouts")) || [];
      const total = storedWorkouts
        .filter(workout => workout.sport === sportType) // Nur diese Sportart auswählen
        .reduce((sum, workout) => sum + parseFloat(workout.kilometers || 0), 0);
      
      setTotalKilometers(total);
    } catch (error) {
      console.error(`Fehler beim Berechnen der Strecke für ${sportType}:`, error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{sportType} Distance</Text>
      <Text style={styles.distance}>{(totalKilometers || 0).toFixed(2)} km</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
  },
  distance: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#388E32",
  },
});
