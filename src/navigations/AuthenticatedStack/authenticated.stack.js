import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Success} from '../../screens';
import screenNames from '../screenNames';

const AuthenticationNavigator = createStackNavigator();

const AuthenticatedStack = () => {
  return (
    <AuthenticationNavigator.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <AuthenticationNavigator.Screen
        name={screenNames.Success}
        component={Success}
        options={{headerShown: false}}
      />
    </AuthenticationNavigator.Navigator>
  );
};

export default AuthenticatedStack;
