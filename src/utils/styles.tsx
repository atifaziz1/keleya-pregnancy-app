import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');
import colors from '../assets/colors/colors';

export default StyleSheet.create({
  background: {
    backgroundColor: 'transparent',
  },
  header: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  halfScreen: {
    height: height / 1.55,
  },
  flexOne: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    height: height / 2.55,
  },
  containerPadding: {
    paddingHorizontal: 30,
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: colors.paleTeal,
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: colors.warmGrey,
    marginTop: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '200',
    alignSelf: 'center',
  },
  message1: {
    fontSize: 20,
    fontWeight: '200',
    alignSelf: 'center',
    marginTop: 15,
  },
});
