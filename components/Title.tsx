// Title.tsx

import React from 'react';
import {Text} from 'react-native';
import {styles} from '../assets/styles';

export type TitleProps = {
  title: string;
};

export const Title: React.FC<TitleProps> = ({title}) => (
  <Text style={styles.screenTitle}>{title}</Text>
);
