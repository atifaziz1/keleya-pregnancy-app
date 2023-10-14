import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import colors from '../../assets/colors/colors';

type ComponentProps = {
  text: string;
  onPress: (id: string) => void;
  id: string;
  testID?: string;
  accessibilityLabel?: string;
  tintColor?: string;
  containerStyle: object;
};
function MenuItem({
  text,
  onPress,
  id,
  testID,
  accessibilityLabel,
  containerStyle,
}: ComponentProps) {
  return (
    <TouchableOpacity
      style={containerStyle}
      key={id}
      onPress={onPress}
      testID={testID}
      accessibilityLabel={accessibilityLabel}>
      <Text style={{color: colors.white}}>{text}</Text>
    </TouchableOpacity>
  );
}

export default MenuItem;
