import {color} from '../colours';
import {StyleSheet} from 'react-native';

export const headerStyles = StyleSheet.create({
  view: {
    width: '100%',
    height: 70,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: color.lightGrey,
    borderBottomWidth: 1,
  },
  logo: {
    width: 60,
    height: 60,
    position: 'absolute',
    left: 10,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
});
