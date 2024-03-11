import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  movieImg: {
    width: 130,
    height: 200,
  },
  sectionTitle: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '500',
    marginVertical: 20,
  },
  contentContainerStyle: {
    gap: 10,
  },
});
