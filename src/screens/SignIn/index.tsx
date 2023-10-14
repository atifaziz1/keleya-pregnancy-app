import React from 'react';

// import common components
import SignInComponent from './SignInComponent';

// import screen names
import stackNames from '../../navigations/stackNames';

//import images
import headerImage from '../../assets/images/common/headerImage.jpg';

// import types
import {Navigation} from '../../navigations/types';

// import redux actions and hooks
import {useAppDispatch, useAppSelector} from '../../redux/store/hooks/hooks';
import {loginUserAction} from '../../redux/store/slicers/user/user.slice';
import {ScrollView, View} from 'react-native';

type Props = {
  navigation: Navigation;
};

interface FormValues {
  email: string;
  password: string;
}

const SignIn = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const email = useAppSelector(state => state?.user.userInfo.userEmail);

  const handleFormSubmit = (values: FormValues) => {
    if (values.email && values.password) {
      dispatch(loginUserAction(values.email));
      navigation.navigate(stackNames.RootStack);
    }
  };
  const handleBack = () => {
    if (!email) {
      navigation.goBack();
    }
  };

  return (
    <View style={{flex:1}}>
      <SignInComponent
        headerImage={headerImage}
        handleFormSubmit={handleFormSubmit}
        handleBack={handleBack}
      />
    </View>
  );
};

export default SignIn;
