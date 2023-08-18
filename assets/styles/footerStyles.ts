import {color} from '../colours';
import {StyleSheet} from 'react-native';

export const footerStyles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    width: '100%',
    height: 34,
    backgroundColor: color.white,
    borderBottomColor: color.lightBlue,
    borderBottomWidth: 1,
  },
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
