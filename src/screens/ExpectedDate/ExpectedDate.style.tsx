import colors from '../../assets/colors/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  dateContainer: {
    width: '35%',
    height: '12%',
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    padding: '2%',
  },
  alignCenter: {
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: colors.paleTeal,
  },
  buttonDisabled: {
    backgroundColor: colors.warmGrey,
  },
  innerContainer: {
    flex: 0.5,
    paddingBottom: 0,
    alignItems: 'center',
  },
});
