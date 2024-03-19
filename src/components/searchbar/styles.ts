import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '7%',
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    backgroundColor: Colors.darkGray,
    color: Colors.white,
  },
  searchLegend: {
    color: Colors.white,
    width: '75%',
    lineHeight: 32,
    right: 10,
    textAlign: 'left',
    fontSize: 16,
  },
});
