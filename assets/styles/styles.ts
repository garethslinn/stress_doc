import {color} from '../colours';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.white,
  },
  icon: {
    // TODO: Any common styles to all icons
  },
  decriptionWrapper: {
    padding: 10,
    backgroundColor: color.lightBlue,
    color: color.white,
  },
  symptomsWrapper: {
    padding: 10,
    backgroundColor: color.white,
  },
  approachWrapper: {
    padding: 10,
    backgroundColor: color.lightBlue,
  },
  item: {
    flex: 1,
    backgroundColor: color.white,
    borderBottomColor: color.lightGrey,
    borderBottomWidth: 1,
    marginBottom: 0,
    margin: 2,
  },
  itemText: {
    color: color.grey,
    fontSize: 15,
    padding: 6,
  },
  text: {
    color: color.black,
    fontSize: 15,
    padding: 6,
  },
  title1: {
    fontWeight: 'bold',
    color: color.black,
    fontSize: 40,
  },
  title2: {
    color: color.blue,
    textDecorationLine: 'underline',
    fontSize: 17,
    padding: 6,
  },
  title3: {
    marginTop: 20,
    marginBottom: 20,
    color: color.blue,
    fontSize: 20,
    padding: 6,
  },
  title4: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  screenTitle: {
    color: color.white,
    backgroundColor: color.blue,
    fontSize: 20,
    padding: 6,
    textAlign: 'center',
  },
  bodyHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
  },
  logoLarge: {
    width: 200,
    height: 200,
  },

  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: color.lightBlue,
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: color.white,
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: color.white,
    padding: 5,
    fontWeight: 'bold',
  },
});
