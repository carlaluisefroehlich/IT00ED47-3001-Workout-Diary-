import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TotalDistance from "../components/TotalDistance";
import Distances from "../components/Distances";
import style from "../style";

export default function WorkoutDiary() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    loadSports();
  }, []);

  const loadSports = async () => {
    try {
      const storedWorkouts = JSON.parse(await AsyncStorage.getItem("workouts")) || [];
      const uniqueSports = [...new Set(storedWorkouts.map(workout => workout.sport))];
      setSports(uniqueSports);
    } catch (error) {
      console.error("Loading Error:", error);
    }
  };

  return (
    <SafeAreaView style={style.safeArea}>
    <View style={style.header}>
      <Text style={style.heading}>Workout Diary</Text>
    </View>

    <ScrollView contentContainerStyle={style.scrollContainerWorkoutDiary}>
      <View style={style.contentContainerWorkoutDiary}>
        <Card style={style.cardWorkoutContainer}>
          <Card.Content>
            <TotalDistance /> 
          </Card.Content>
        </Card>

        {sports.length > 0 ? (
          sports.map((sport, index) => (
            <Card key={index} style={style.cardWorkoutContainer}>
              <Card.Content>
                <Distances sportType={sport} />
              </Card.Content>
            </Card>
          ))
        ) : (
          <Card style={style.cardWorkoutContainer}>
            <Card.Content>
              <Text style={style.noWorkouts}>No workouts recorded yet.</Text>
            </Card.Content>
          </Card>
        )}
      </View>
    </ScrollView>
  </SafeAreaView>
  );
}
