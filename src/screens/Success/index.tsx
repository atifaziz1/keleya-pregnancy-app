import React from 'react';

import {Text, View, ImageBackground, Image} from 'react-native';

//import components
import SuccessComponent from './SuccessComponent';

//import image
import burgerIcon from '../../assets/images/common/burgerIcon.png';

// import types
import {Navigation} from '../../navigations/types';
type Props = {
  navigation: Navigation;
};

const Success = ({navigation}: Props) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return <SuccessComponent openDrawer={openDrawer} leftIcon={burgerIcon} />;
};

export default Success;
