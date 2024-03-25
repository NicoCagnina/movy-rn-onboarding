import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tabBackground,
    padding: 20,
    paddingTop: 50,
  },
  contentContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: '45%',
    marginTop: '40%',
  },
  createAccountTxt: {
    color: Colors.white,
    fontSize: 30,
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 60,
    width: '100%',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonTxt: {
    color: Colors.white,
    fontSize: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  toggleText: {
    color: Colors.white,
    fontSize: 20,
  },
  toggleButton: {
    color: Colors.white,
    fontSize: 20,
    marginLeft: 5,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.white,
  },
});
