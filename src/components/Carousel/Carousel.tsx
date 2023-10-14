import React, {useRef} from 'react';
import {View, Dimensions, FlatList, Animated} from 'react-native';
import CarouselItem from './CarouselItem';

const {width} = Dimensions.get('window');

import AppButton from '../Button';

// import style
import styles from './Carousel.style';
import {translate} from '../../utils/i18n';
import colors from '../../assets/colors/colors';
import screenNames from '../../navigations/screenNames';

const data = [
  {id: 0, title: 'Keleya', description: 'For a fit and relaxed pregnancy'},
  {id: 1, title: 'Keleya', description: 'For a fit and relaxed pregnancy'},
  {id: 2, title: 'Keleya', description: 'For a fit and relaxed pregnancy'},
];

const Carousel = ({navigation}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  const flatListRef = useRef();

  if (data && data.length) {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={data}
          ref={flatListRef}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={() => {
            return (
              <View>
                <CarouselItem navigation={navigation} />
              </View>
            );
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />

        <View style={styles.dotView}>
          <View style={styles.bottomView}>
            <AppButton
              key={1}
              title={translate('getStarted')}
              contentStyle={styles.button1}
              containerStyle={{backgroundColor: colors.paleTeal}}
              onPress={() => {
                navigation.navigate(screenNames.SignUp);
              }}
            />

            <AppButton
              key={2}
              title={translate('orLogin')}
              contentStyle={styles.button2}
              onPress={() => {
                navigation.navigate(screenNames.SignIn);
              }}
            />
          </View>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={[styles.animatedDotView, {opacity: opacity}]}
              />
            );
          })}
        </View>
      </View>
    );
  }
};

export default Carousel;
