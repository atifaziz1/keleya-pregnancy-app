import React from 'react';

import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

type Item = {
  key: string;
  value: string;
};

type ComponentsProps = {
  selectedValue: string;
  onValueChange: (value: string) => void;
  data: Item[];
};
const AppPicker = ({selectedValue, onValueChange, data}: ComponentsProps) => {
  const appData = data || [];
  return (
    <View>
      <Picker
        mode={'dropdown'}
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        {appData.map((item, index) => {
          return (
            <Picker.Item
              key={index.toString()}
              label={item.key}
              value={item.value}
            />
          );
        })}
      </Picker>
    </View>
  );
};

export default AppPicker;
