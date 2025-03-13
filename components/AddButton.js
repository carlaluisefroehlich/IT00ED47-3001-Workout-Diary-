import React from "react";
import { Button } from "react-native-paper";  
import style from "../style";

export default function AddButton({ onPress }) { // onPress als Prop empfangen
  return (
    <Button
      icon="plus"
      mode="contained"
      onPress={onPress}  // Prop wird jetzt hier benutzt
      style={style.addButton}
      labelStyle={style.addButtonText}
    >
      ADD
    </Button>
  );
}