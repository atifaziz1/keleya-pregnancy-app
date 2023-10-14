import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    width: width * 0.7,
    height: height * 0.057,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 22,
    fontWeight: '400'
  },
});
