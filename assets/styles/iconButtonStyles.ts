import {color} from '../colours';
import {StyleSheet} from 'react-native';

export const iconButtonStyles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.lightBlue,
  },
  borderRight: {
    borderRightColor: color.white,
    borderRightWidth: 1,
  },
  buttonText: {
    fontSize: 14,
    color: color.white,
    fontWeight: '500',
  },
});
