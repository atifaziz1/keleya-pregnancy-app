import React from 'react';

// import common components
import ExpectedDateForm from './ExpectedDateForm';

//import utils
import screenNames from '../../navigations/screenNames';

// import redux action
import {useAppDispatch, useAppSelector} from '../../redux/store/hooks/hooks';
import {addExpectedBabyDate} from '../../redux/store/slicers/user/user.slice';

// import types
import {Navigation} from '../../navigations/types';

type Props = {
  navigation: Navigation;
};

const ExpectedDate = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(state => state?.user.userInfo.userName);

  const selectedDate = (date: string) => {
    dispatch(addExpectedBabyDate(date));
  };

  const moveToNextScreen = () => {
    navigation.navigate(screenNames.UserWorkout);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ExpectedDateForm
      selectedDate={selectedDate}
      moveToNextScreen={moveToNextScreen}
      handleGoBack={handleGoBack}
      userName={userName}
    />
  );
};

export default ExpectedDate;
