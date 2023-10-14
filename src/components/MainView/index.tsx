import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from '../../utils/styles';

const MainView = ({children, keyboardVerticalOffset = -300}) => {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={[styles.flexOne]}>
      <ScrollView
        contentContainerStyle={[styles.flexOne]}
        style={{height: '100%', paddingTop: insets.top, paddingBottom: insets.bottom}}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MainView;
