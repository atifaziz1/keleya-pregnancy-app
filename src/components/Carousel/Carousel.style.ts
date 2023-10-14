import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../assets/colors/colors';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  animatedDotView: {
    height: 10,
    width: 10,
    backgroundColor: colors.paleTeal,
    margin: 8,
    borderRadius: 5,
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 15,
  },
  cardView: {
    width: width,
    height: height,
  },

  logoStyle: {
    width: '40%',
    height: '30%',
    resizeMode: 'contain',
  },
  description: {
    color: colors.greyishBrown,
    fontSize: 18,
    padding: 20,
    fontWeight: '400',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: height * 0.03,
  },
  button1: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 18,
  },
  button2: {
    fontWeight: '700',
    color: colors.greyishBrown,
    fontSize: 14,
  },
});
