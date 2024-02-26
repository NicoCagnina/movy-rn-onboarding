import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

export const styles = StyleSheet.create({
  iconWithText: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },
  whiteText: {
    color: Colors.white,
    verticalAlign: 'middle',
    textAlign: 'center',
  },
});
