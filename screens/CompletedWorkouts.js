import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Task from "../components/Task";
import style from "../style";

export default function CompletedWorkouts() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    try {
      const storedWorkouts = JSON.parse(await AsyncStorage.getItem("workouts")) || [];
      setTasks(storedWorkouts);
    } catch (error) {
      console.error("Loading Error:", error);
    }
  };

  return (
    <SafeAreaView style={style.container2}>
      <View style={style.header}>
        <Text style={style.heading}>Completed Workouts</Text>
      </View>

      <ScrollView contentContainerStyle={style.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={style.taskWrapper}>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <View key={index} style={style.items}>
                <Task sport={task.sport} kilometers={task.kilometers} minutes={task.minutes} date={task.date} />
              </View>
            ))
          ) : (
            <Text style={style.noWorkouts}>No completed workouts yet.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
