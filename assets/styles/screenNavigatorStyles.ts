import {color} from '../colours';
import {StyleSheet} from 'react-native';

export const screenNavigator = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: color.white,
    fontSize: 32,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    color: color.white,
    fontSize: 20,
    paddingHorizontal: 20,
  },
  meter: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  meterText: {
    color: color.white,
    fontSize: 16,
  },
});
