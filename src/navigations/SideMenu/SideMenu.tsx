import React from 'react';
import {
  Alert,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import MenuItem from './MenuItem';

import logo from '../../assets/images/common/keleya-logo.png';

//import utils
import {translate} from '../../utils/i18n';

// import screen names
import stackNames from '../../navigations/stackNames';
import screenNames from '../../navigations/screenNames';
import colors from '../../assets/colors/colors';

// import redux action
import {useAppDispatch} from '../../redux/store/hooks/hooks';
import {loginUserAction} from '../../redux/store/slicers/user/user.slice';

// import types
import {Navigation} from '../../navigations/types';

type Props = {
  navigation: Navigation;
};

const SideMenu = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const items = [
    {
      iconSource: 'success',
      itemLabel: translate('SuccessScreen.title'),
      onPress: () => navigateToScreen(screenNames.Success),
      hideLine: true,
      containerStyle: styles.logoutButton,
      accessKey: '',
      name: translate('SuccessScreen.title'),
    },
  ];
  const navigateToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{name: stackNames.AuthenticationStack}],
    });
  };

  const navigateToScreen = (name: string) => {
    navigation.navigate(name);
  };

  const logout = () => {
    Alert.alert(
      translate('sideMenu.logout'),
      translate('sideMenu.logoutSentence'),
      [
        {
          text: translate('cancel'),
        },
        {
          text: translate('sideMenu.logout'),
          onPress: () => {
            try {
              dispatch(loginUserAction(''));
              navigateToLogin();
            } catch (e) {}
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.flexOne}>
      <View style={[styles.flexOne, {backgroundColor: colors.warmGrey}]}>
        {items.map((item, index) => {
          return (
            <View key={index.toString()}>
              <View style={styles.headerContainer}>
                <Image source={logo} style={{flex: 1}} resizeMode="contain" />
              </View>
              <View style={styles.separator} />
              <MenuItem
                id={item.itemLabel}
                text={item.itemLabel}
                onPress={id => item.onPress(id)}
                containerStyle={item.containerStyle}
              />
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
        <Text style={styles.logoutText}>{translate('sideMenu.logout')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: colors.white,
    marginBottom: 5,
  },
  flexOne: {
    flex: 1,
  },
  logoutButton: {
    backgroundColor: colors.paleTeal,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: colors.white,
    fontSize: 20,
  },
});
export default SideMenu;
