import {color} from '../colours';
import {StyleSheet} from 'react-native';

export const audioPlayerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playButton: {
    padding: 10,
    backgroundColor: color.lightGrey,
    margin: 5,
    flex: 1,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: color.red,
    margin: 5,
  },
  stopButton: {
    padding: 10,
    backgroundColor: color.red,
    margin: 5,
  },
});
