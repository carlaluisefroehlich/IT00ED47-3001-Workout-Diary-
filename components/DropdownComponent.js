import React, { useState } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import style from '../style';

const data = [
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Hiking', value: 'Hiking' },
];

const DropdownComponent = ({ setSport }) => { // setSport als Prop empfangen
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={style.containerDropdown}>
      <Dropdown
        style={[style.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={style.placeholderStyle}
        selectedTextStyle={style.selectedTextStyle}
        inputSearchStyle={style.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value" // Jetzt speichert es direkt die Sportart
        placeholder={!isFocus ? 'Select a sport' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setSport(item.value); // Speichert die Sportart in AddWorkout.js
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

