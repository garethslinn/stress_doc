// Logo.tsx

import React from 'react';
import {Image} from 'react-native';
import {styles} from '../assets/styles';
import {headerStyles} from '../assets/styles';

export type LogoProps = {
  size?: string;
};

export const Logo: React.FC<LogoProps> = ({size}) => (
  <Image
    testID="logo"
    style={size === 'large' ? styles.logoLarge : headerStyles.logo}
    source={require('../assets/logo.png')}
  />
);
