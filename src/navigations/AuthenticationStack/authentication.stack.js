import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {SignIn} from '../../screens';
import {SignUp} from '../../screens';
import {Carousel} from '../../components/Carousel';
import {UserName} from '../../screens';
import {ExpectedDate} from '../../screens';
import {UserWorkout} from '../../screens';
import screenNames from '../screenNames';

const AuthenticationNavigator = createStackNavigator();

import {useAppSelector} from '../../redux/store/hooks/hooks';
import {SafeAreaView} from 'react-native-safe-area-context';

const AuthenticationStack = () => {
  const email = useAppSelector(state => state?.user.userInfo.userEmail);
  return (
    <AuthenticationNavigator.Navigator
      initialRouteName={email ? screenNames.SignIn : screenNames.Introduction}
      screenOptions={{
        gestureEnabled: false,
      }}>
      <AuthenticationNavigator.Screen
        name={screenNames.Introduction}
        component={Carousel}
        options={{headerShown: false}}
      />
      <AuthenticationNavigator.Screen
        name={screenNames.SignIn}
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthenticationNavigator.Screen
        name={screenNames.SignUp}
        component={SignUp}
        options={{headerShown: false}}
      />
      <AuthenticationNavigator.Screen
        name={screenNames.UserName}
        component={UserName}
        options={{headerShown: false}}
      />
      <AuthenticationNavigator.Screen
        name={screenNames.ExpectedDate}
        component={ExpectedDate}
        options={{headerShown: false}}
      />
      <AuthenticationNavigator.Screen
        name={screenNames.UserWorkout}
        component={UserWorkout}
        options={{headerShown: false}}
      />
    </AuthenticationNavigator.Navigator>
  );
};

export default AuthenticationStack;
