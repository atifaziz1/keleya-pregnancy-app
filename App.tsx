import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import stacks
import AuthenticationStack from './src/navigations/AuthenticationStack/authentication.stack';
import RootStack from './src/navigations/RootStack/rootStack';

//import stackNames
import stackNames from './src/navigations/stackNames';

//import i18n
import {setI18nConfig} from './src/utils/i18n';

// import redux
import {store} from './src/redux/store/configureStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
let persistor = persistStore(store);

const MainStackNavigator = createStackNavigator();

const App = () => {
  useEffect(() => {
    setI18nConfig();
  }, []);
  const renderStack = () => {
    return (
      <MainStackNavigator.Navigator
        initialRouteName={stackNames.AuthenticationStack}>
        <MainStackNavigator.Screen
          name={stackNames.AuthenticationStack}
          component={AuthenticationStack}
          options={{headerShown: false}}
        />
        <MainStackNavigator.Screen
          name={stackNames.RootStack}
          component={RootStack}
          options={{headerShown: false}}
        />
      </MainStackNavigator.Navigator>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}} edges={['top', 'bottom']}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>{renderStack()}</NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
