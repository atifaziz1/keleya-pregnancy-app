import React from 'react';
import {TouchableOpacity, Text, GestureResponderEvent} from 'react-native';

// import style
import styles from './Button.style';

interface ValuesType {
  email: string;
  password: string;
}

interface Props {
  disabled?: boolean;
  title: string;
  contentStyle?: object;
  containerStyle?: object;
  onPress: (event: GestureResponderEvent) => void;
  key: number;
}

const AppButton = ({
  disabled,
  title,
  contentStyle,
  containerStyle,
  onPress,
  key = 0,
}: Props) => {
  return (
    <TouchableOpacity
      key={key.toString()}
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, {...containerStyle}]}>
      <Text style={[contentStyle, styles.textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
