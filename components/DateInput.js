import React, { useState } from "react";
import { Text, TouchableOpacity, View, Modal } from "react-native";
import style from "../style";
import DatePicker from "react-native-modern-datepicker";

export default function DateInput({ setDate }) {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  function handleOnPress() {
    setOpen(!open);
  }

  function handleChange(date) {
    setSelectedDate(date);
    setDate(date); // State in AddWorkout aktualisieren
    setOpen(false); // Modal schließen
  }

  return (
    <View style={style.container3}>
      <Text>{selectedDate ? selectedDate.toString() : "Select a date"}</Text>

      <TouchableOpacity onPress={handleOnPress} style={style.button}>
        <Text style={style.buttonText}>Open Calendar</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <DatePicker 
              mode="calendar"
              selected={selectedDate || "2024-01-01"} // Standardwert setzen
              onDateChange={handleChange}
            />

            <TouchableOpacity onPress={handleOnPress} style={style.button}>
              <Text style={style.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
