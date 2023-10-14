import React from 'react';

import UserWorkoutComponent from './UserWorkoutComponent';

//import images
import workoutImage from '../../assets/images/common/workoutImage.png';

//import utils
import stackNames from '../../navigations/stackNames';

// import redux action
import {useAppDispatch} from '../../redux/store/hooks/hooks';
import {addWorkoutSchedule} from '../../redux/store/slicers/user/user.slice';

// import types
import {Navigation} from '../../navigations/types';

type Props = {
  navigation: Navigation;
};

const UserWorkout = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const handleBackPress = () => {
    navigation.goBack();
  };

  const saveSelectedWeek = (time: string) => {
    dispatch(addWorkoutSchedule(time));
    navigation.navigate(stackNames.RootStack);
  };

  return (
    <UserWorkoutComponent
      headerImage={workoutImage}
      handleBackPress={handleBackPress}
      saveSelectedWeek={saveSelectedWeek}
    />
  );
};

export default UserWorkout;
