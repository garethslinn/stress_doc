import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {footerStyles as styles} from '../assets/styles/';
import {IconButton} from './IconButton';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <IconButton title="Home" screen="Home" navigation={navigation} />
      <IconButton
        title="MindContents"
        screen="MindContents"
        navigation={navigation}
      />
      <IconButton title="Issues" screen="Issues" navigation={navigation} />
      <IconButton
        title="Strategies"
        screen="Strategies"
        navigation={navigation}
      />
      <IconButton title="Tools" screen="Tools" navigation={navigation} />
      <IconButton
        title="Settings"
        screen="Settings"
        navigation={navigation}
        isLastButton
      />
    </View>
  );
};

export default Footer;
