import React from 'react';

import {Image, View} from 'react-native';

//import assets
import headerImage from '../../assets/images/common/headerImage.jpg';

const Header = () => {
  return (
    <View>
      <Image
        source={headerImage}
        style={{width: '100%', height: '100%', resizeMode: 'cover'}}
      />
    </View>
  );
};

export default Header;
