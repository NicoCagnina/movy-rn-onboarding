import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.black,
    height: '100%',
  },
  movyLogoIconContainer: {
    top: 20,
    position: 'absolute',
    zIndex: 1,
  },
  activityIndicator: {
    marginTop: '50%',
  },
});