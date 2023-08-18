import React from 'react';
import {View, Text} from 'react-native';
import {headerStyles as styles} from '../assets/styles';
import {TEXT} from '../constants';
import {Logo} from './Logo';

const Header = () => {
  return (
    <View style={styles.view}>
      <Logo />
      <Text style={styles.text}>{TEXT.appName}</Text>
    </View>
  );
};

export default Header;
