import {color} from '../colours';
import {StyleSheet} from 'react-native';

export const audioPlayerStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },


  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  fileName: {
    fontSize: 16,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.white,
  },
  playButton: {
    padding: 10,
    backgroundColor: 'green',
    marginRight: 10,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: 'red',
    marginRight: 10,
  },
  downloadButton: {
    padding: 10,
    backgroundColor: 'blue',
  },
  stopButton: {
    padding: 10,
    backgroundColor: 'gray',
    marginTop: 20,
  },
});

