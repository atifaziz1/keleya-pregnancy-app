import React, {useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

// import common components
import Header from '../../components/Header';
import AppButton from '../../components/Button';
import MainView from '../../components/MainView';

//import images
import dueDateImage from '../../assets/images/common/dueDateImage.png';

//import utils
import colors from '../../assets/colors/colors';
import {translate} from '../../utils/i18n';

//import style
import styles from '../../utils/styles';
import innerStyle from './ExpectedDate.style';

type Props = {
  selectedDate: (date: string) => void;
  moveToNextScreen: () => void;
  handleGoBack: () => void;
  userName: string;
};

const ExpectedDateForm = ({
  selectedDate,
  moveToNextScreen,
  handleGoBack,
  userName = '',
}: Props) => {
  const initialText = translate('dateScreen.selectDate');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDateFmt, setSelectedDateFmt] = useState(initialText);

  return (
    <MainView>
      <View style={styles.flexOne}>
        <Header
          withBackIcon
          onPress={handleGoBack}
          image={dueDateImage}
          imageStyle={styles.header}
          containerStyle={styles.flexOne}
        />

        <View style={[innerStyle.innerContainer, styles.containerPadding]}>
          <Text style={styles.welcomeText}>
            {`${translate('dateScreen.message1')}${userName}?`}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}
            style={innerStyle.dateContainer}>
            <Text style={{color: colors.blue}}> {selectedDateFmt}</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', flex: 0.2}}>
          <AppButton
            key={0}
            disabled={selectedDateFmt === initialText}
            title={translate('continue')}
            onPress={() => {
              moveToNextScreen();
            }}
            contentStyle={styles.buttonText}
            containerStyle={
              selectedDateFmt === initialText
                ? innerStyle.buttonDisabled
                : innerStyle.buttonEnabled
            }
          />
        </View>

        <DatePicker
          modal
          mode={'date'}
          minimumDate={new Date()}
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            const formatedDate = moment(date).format('MMM D, YYYY');
            setSelectedDateFmt(formatedDate);
            selectedDate(formatedDate);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </MainView>
  );
};

export default ExpectedDateForm;
