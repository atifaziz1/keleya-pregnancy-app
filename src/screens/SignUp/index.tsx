import React from 'react';

//import images
import headerImage from '../../assets/images/common/headerImage.jpg';

// import components
import SignUpComponent from './SignUpComponent';
import screenNames from '../../navigations/screenNames';

// import redux actions and hooks
import {useAppDispatch} from '../../redux/store/hooks/hooks';
import {loginUserAction} from '../../redux/store/slicers/user/user.slice';

// import types
import {Navigation} from '../../navigations/types';

type Props = {
  navigation: Navigation;
};

type FormValues = {
  email: string;
  password?: string;
  privacyPolicyCheck: boolean;
  termsConditions: boolean;
};

const SignUp = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const handleFormSubmit = (values: FormValues) => {
    if (values.email && values.password) {
      dispatch(loginUserAction(values.email));
      navigation.navigate(screenNames.UserName);
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SignUpComponent
      headerImage={headerImage}
      handleFormSubmit={handleFormSubmit}
      handleBackPress={handleBackPress}
    />
  );
};

export default SignUp;
