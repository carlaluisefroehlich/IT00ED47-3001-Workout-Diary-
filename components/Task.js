import React from "react";
import { View, Text } from "react-native";
import style from "../style";

const Task = ({ sport, kilometers, minutes, date }) => {
    return (
        <View style={style.taskItem}>
            <View style={style.itemLeft}>
                <Text style={style.sectionTitle}>{sport}</Text>
                <Text style={style.itemText}>{kilometers} km</Text>
                <Text style={style.itemText}>{minutes} min</Text>
                <Text style={style.itemText}>{date}</Text>
            </View>
        </View>
    );
};


export default Task;
