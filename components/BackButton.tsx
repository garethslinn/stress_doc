import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../assets/styles/';
import {BackButtonProps} from '../types';
import {TEXT} from '../constants';

const BackButton: React.FC<BackButtonProps> = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.backButton}>
        &#8592; {TEXT.components.backButton}
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;
