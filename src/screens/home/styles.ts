import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',
    paddingBottom: 5,
  },
  movyLogoIconContainer: {
    top: 20,
    position: 'absolute',
    zIndex: 1,
  },
  flatlistStyle: {
    width: '100%',
  },
  activityIndicator: {
    marginTop: '50%',
  },
});
