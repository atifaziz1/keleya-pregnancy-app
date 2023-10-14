import React from 'react';

// import components
import UserNameComponent from './UserNameComponent';

//import images
import couchSmile from '../../assets/images/common/couchSmile.png';

//import utils
import screenNames from '../../navigations/screenNames';

// import redux action
import {useAppDispatch} from '../../redux/store/hooks/hooks';
import {addUserName} from '../../redux/store/slicers/user/user.slice';

// import types
import {Navigation} from '../../navigations/types';
import {ScrollView, Text, View} from 'react-native';
import TestScrollView from '../../components/TestScrollView';

type Props = {
  navigation: Navigation;
};

interface FormValues {
  name: string;
}

const UserName = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (values: FormValues) => {
    if (values?.name) {
      dispatch(addUserName(values.name));
      navigation.navigate(screenNames.ExpectedDate);
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <UserNameComponent
        headerImage={couchSmile}
        handleFormSubmit={handleFormSubmit}
        handleBackPress={handleBackPress}
      />
    </ScrollView>
  );
};

export default UserName;
