// PrimaryButton.tsx

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../assets/styles';

export type PrimaryButtonProps = {
  title: string;
  screen?: string;
  navigation: any;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  screen,
  navigation,
}) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => (screen ? navigation.navigate(screen) : null)}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);
