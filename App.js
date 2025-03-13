import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import AddWorkout from './screens/AddWorkout';
import CompletedWorkouts from './screens/CompletedWorkouts';
import WorkoutDiary from './screens/WorkoutDiary';
import style from './style';

export default function App() {
  const [tab, setTab] = useState("Profile");

  const TABS = [
    { label: "Profile", icon: "user", component: () => <WorkoutDiary /> },
    { label: "Add", icon: "pluscircleo", component: () => <AddWorkout setTab={setTab} /> },
    { label: "Workouts", icon: "profile", component: () => <CompletedWorkouts /> }
  ];

  const ActiveComponent = TABS.find(t => t.label === tab)?.component || (() => <WorkoutDiary />);

  return (
    <SafeAreaView style={style.container1}>
      <StatusBar backgroundColor="#388E32" />
      <TabNavigation tab={tab} setTab={setTab} tabs={TABS} />
      <View style={style.mainView}>
        <ActiveComponent />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function TabNavigation({ tab, setTab, tabs }) {
  return (
    <View style={style.navView}>
      {tabs.map((t) => (
        <Pressable
          key={t.label}
          onPress={() => setTab(t.label)}
          style={[style.tab, tab === t.label ? style.selectedTab : null]}
        >
          <View style={style.iconContainer}>
            <AntDesign
              name={t.icon}
              size={24}
              color={tab === t.label ? "white" : "#555555"}
            />
            <Text style={[style.tabText, tab === t.label ? style.selectedTabText : null]}>
              {t.label}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}
