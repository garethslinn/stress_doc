import React from 'react';
import {View} from 'react-native';
import {PrimaryButton} from './PrimaryButton'; // adjust the import path as necessary
import {styles} from '../assets/styles';

export type PrimaryButtonProps = {
  title: string;
  screen: string;
};

export type PrimaryButtonContainerProps = {
  buttons: PrimaryButtonProps[];
  navigation: any;
};

export const PrimaryButtonContainer: React.FC<PrimaryButtonContainerProps> = ({
  buttons,
  navigation,
}) => {
  return (
    <View style={styles.buttonContainer}>
      {buttons.map((button, index) => (
        <PrimaryButton
          key={index}
          title={button.title}
          screen={button.screen}
          navigation={navigation}
        />
      ))}
    </View>
  );
};
