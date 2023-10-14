import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    color: colors.greyishBrown,
    fontSize: 18,
    fontWeight: '200',
    alignSelf: 'center',
  },
  notificationIcon: {
    width: 40,
    height: 40,
  },
  centeredAlign: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.1,
  },
});
