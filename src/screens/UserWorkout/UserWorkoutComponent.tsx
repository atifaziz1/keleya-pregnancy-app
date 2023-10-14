import React, {useState} from 'react';

import {View} from 'react-native';

// import  components
import Header from '../../components/Header';
import AppButton from '../../components/Button';
import AppPicker from '../../components/AppPicker';
import MainView from '../../components/MainView';

//import utils
import {translate} from '../../utils/i18n';
import workoutData from '../../utils/workoutData';

//import style
import styles from '../../utils/styles';

type ComponentProps = {
  headerImage: string;
  saveSelectedWeek: (week: string) => void;
  handleBackPress: () => void;
};

const UserWorkoutComponent = ({
  headerImage,
  handleBackPress,
  saveSelectedWeek,
}: ComponentProps) => {
  const [selectedWeek, setSelectedWeek] = useState('');

  return (
    <MainView>
      <View style={styles.flexOne}>
        <Header
          withBackIcon
          centerText={translate('workOut.heading1')}
          onPress={handleBackPress}
          image={headerImage}
          imageStyle={styles.header}
          containerStyle={styles.flexOne}
        />

        <View
          style={[
            {
              flex: 0.5,
            },
            styles.containerPadding,
          ]}>
          <AppPicker
            selectedValue={selectedWeek}
            onValueChange={(itemValue: string) => {
              setSelectedWeek(itemValue);
            }}
            data={workoutData}
          />
        </View>
        <View style={{alignItems: 'center', flex: 0.2}}>
          <AppButton
            key={0}
            title={translate('continue')}
            onPress={() => {
              saveSelectedWeek(selectedWeek);
            }}
            contentStyle={styles.buttonText}
            containerStyle={styles.buttonEnabled}
          />
        </View>
      </View>
    </MainView>
  );
};

export default UserWorkoutComponent;
