import React from 'react';
import {TouchableOpacity} from 'react-native';
import {iconButtonStyles as styles} from '../assets/styles';
import {IconButtonProps} from '../types/components/Icon';
import {Icon} from './Icon';

export const IconButton: React.FC<IconButtonProps> = ({
  title,
  screen,
  navigation,
  isLastButton = false,
}) => (
  <TouchableOpacity
    style={[styles.button, isLastButton ? {} : styles.borderRight]}
    onPress={() => navigation.navigate(screen)}>
    <Icon name={title} />
  </TouchableOpacity>
);
