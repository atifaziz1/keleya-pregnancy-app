import React from 'react';

import {Text, View, ImageBackground, Image} from 'react-native';

//import components
import AppButton from '../../components/Button';
import Header from '../../components/Header';
import MainView from '../../components/MainView';


//import image
import notificationBackground from '../../assets/images/common/notificationsBackground.png';
import bellIcon from '../../assets/images/common/bell.png';

//import utils
import {translate} from '../../utils/i18n';

//import style
import styles from '../../utils/styles';
import fileStyle from './Success.style';

type ComponentProps = {
  openDrawer: () => void;
  leftIcon: string;
};

const SuccessComponent = ({openDrawer, leftIcon}: ComponentProps) => {
  return (
    <MainView>
      <ImageBackground
        source={notificationBackground}
        style={fileStyle.container}>
        <View style={fileStyle.headerContainer}>
          <Header leftIcon={leftIcon} onPress={openDrawer} imageStyle={{}} />
          <Image source={bellIcon} style={fileStyle.notificationIcon} />
        </View>
        <View style={fileStyle.centeredAlign}>
          <View>
            <View style={[{marginTop: 20}]}>
              <Text style={fileStyle.textStyle}>
                {translate('success.header1')}
              </Text>
              <Text style={fileStyle.textStyle}>
                {translate('success.header2')}
              </Text>
            </View>
          </View>
          <View>
            <AppButton
              key={0}
              title={translate('success.skip')}
              onPress={() => {}}
              contentStyle={[styles.buttonText, {color: 'black'}]}
            />
            <AppButton
              key={1}
              title={translate('success.allowNotifications')}
              onPress={() => {}}
              contentStyle={styles.buttonText}
              containerStyle={styles.buttonEnabled}
            />
          </View>
        </View>
      </ImageBackground>
    </MainView>
  );
};

export default SuccessComponent;
