import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import stackNames from '../../navigations/stackNames';
import AuthenticatedStack from '../../navigations/AuthenticatedStack/authenticated.stack';

import SideMenu from '../SideMenu/SideMenu';

const DrawerStack = createDrawerNavigator();

const RootStack = () => {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}
      drawerContent={props => <SideMenu {...props} />}>
      <DrawerStack.Screen
        name={stackNames.AuthenticatedStack}
        component={AuthenticatedStack}
        options={{headerShown: false}}
      />
    </DrawerStack.Navigator>
  );
};

export default RootStack;
