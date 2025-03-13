import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DistanceInput from "../components/DistanceInput";
import DurationInput from "../components/DurationInput";
import AddButton from "../components/AddButton";
import DropdownComponent from "../components/DropdownComponent";
import DateInput from "../components/DateInput";
import style from "../style";

export default function AddWorkout({ setTab }) {
  const [sport, setSport] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [minutes, setMinutes] = useState("");
  const [date, setDate] = useState("");

  const saveWorkout = async () => {
    console.log("Sport:", sport);
    console.log("Kilometers:", kilometers);
    console.log("Minutes:", minutes);
    console.log("Date:", date);

    // Sicherstellen, dass keine leeren Eingaben gespeichert werden
    if (!sport.trim() || !kilometers.trim() || !minutes.trim() || !date.trim()) {
      Alert.alert("Missing Input", "Please fill in all fields.");
      return;
    }

    try {
      const newWorkout = { sport, kilometers, minutes, date };
      const existingWorkouts = JSON.parse(await AsyncStorage.getItem("workouts")) || [];
      const updatedWorkouts = [...existingWorkouts, newWorkout];

      await AsyncStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
      Alert.alert("Successful", "Workout saved!");

      setTab("Workouts"); // Wechsel zur Workouts-Seite
    } catch (error) {
      console.error("Saving Error:", error);
    }
  };

  return (
    <SafeAreaView style={style.container2}>
      <View style={style.header}>
        <Text style={style.heading}>Add Workout</Text>
      </View>

      <ScrollView contentContainerStyle={style.scrollContent} keyboardShouldPersistTaps="handled">
  <Card style={style.card}>
    <Card.Content>
      <Text style={style.label}>Sport Type</Text>
      <DropdownComponent setSport={setSport} />
    </Card.Content>
  </Card>

  <Card style={style.card}>
    <Card.Content>
      <Text style={style.label}>Distance</Text>
      <DistanceInput setKilometers={setKilometers} />
    </Card.Content>
  </Card>

  <Card style={style.card}>
    <Card.Content>
      <Text style={style.label}>Duration</Text>
      <DurationInput setMinutes={setMinutes} />
    </Card.Content>
  </Card>

  <Card style={style.card}>
    <Card.Content>
      <Text style={style.label}>Date</Text>
      <DateInput setDate={setDate} />
    </Card.Content>
  </Card>

  <View style={style.buttonContainer}>
    <AddButton onPress={saveWorkout} />
  </View>
</ScrollView>

    </SafeAreaView>
  );
}
