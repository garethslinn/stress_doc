import React from 'react';
import {Image} from 'react-native';
import {IconProps} from '../types/components/Icon';
import {color as colour} from '../assets/colours';
import {ICONS} from '../constants';
import {styles} from '../assets/styles';

export const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color = colour.white,
}) => {
  return (
    <Image
      source={ICONS[name]}
      style={[styles.icon, {width: size, height: size, tintColor: color}]}
    />
  );
};
