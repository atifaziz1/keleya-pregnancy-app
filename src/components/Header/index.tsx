import React from 'react';

import {
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
} from 'react-native';

import styles from './Header.styles';

import arrowBack from '../../assets/images/common/arrowBack.png';

type Props = {
  image?: string;
  centerText?: string;
  onPress: () => void;
  leftIcon?: string;
  containerStyle?: object;
  withBackIcon?: boolean;
  imageStyle?: object;
};
const Header = ({
  image,
  withBackIcon = false,
  onPress,
  imageStyle,
  containerStyle,
  centerText = '',
  leftIcon,
}: Props) => {
  const renderLeftElement = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          padding: 20,
        }}>
        {withBackIcon && (
          <Image source={arrowBack} style={styles.backImageStyle} />
        )}
        {leftIcon && <Image source={leftIcon} style={styles.backImageStyle} />}
      </TouchableOpacity>
    );
  };
  return (
    <View style={[containerStyle]}>
      <ImageBackground source={image} style={imageStyle}>
        {renderLeftElement()}
        {centerText ? (
          <View style={styles.centerItemStyle}>
            <Text style={styles.centerTextStyle}>{centerText}</Text>
          </View>
        ) : null}
      </ImageBackground>
    </View>
  );
};

Header.defaultProps = {
  containerStyle: {flex: 0.5},
};

export default Header;
