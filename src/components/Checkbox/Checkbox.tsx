import * as React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import colors from '../../assets/colors/colors';

type checkboxLabelProps = {
  typo: string;
  text: string;
};

type Props = {
  labelMap: checkboxLabelProps[];
  status?: string;
  onPress?: (isIconChecked: boolean) => void;
};

const CheckBox = ({labelMap, onPress}: Props | TouchableOpacityProps) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.1}}>
        <TouchableOpacity onPress={onPress}>
          <BouncyCheckbox
            iconStyle={styles.iconContainer}
            size={10}
            fillColor={colors.paleTeal}
            onPress={onPress}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.9, justifyContent: 'center'}}>
        <Text>
          {labelMap.map((item: checkboxLabelProps) => {
            const openLink = item.typo === 'normal';
            return (
              <TouchableOpacity disabled={openLink} onPress={() => {}}>
                <Text style={!openLink && styles.highlight} numberOfLines={2}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },
  iconContainer: {
    height: 20,
    width: 20,
  },
  highlight: {
    color: 'black',
    fontWeight: '500',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default CheckBox;
