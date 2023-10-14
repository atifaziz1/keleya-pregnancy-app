import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

//import assets
import logo from '../../assets/images/common/keleya-logo.png';
import firstInrto from '../../assets/images/introduction/firstIntro.png';
import {translate} from '../../utils/i18n';

// import style
import styles from './Carousel.style';

const CarouselItem = () => {
  return (
    <ImageBackground source={firstInrto} style={styles.cardView}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoStyle} source={logo} />
        <Text style={styles.description}>
          {translate('introduction.message1')}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default CarouselItem;
