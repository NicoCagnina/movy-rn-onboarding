import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

export const styles = StyleSheet.create({
  genreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '80%',
    marginTop: '90%',
    maxHeight: 100,
    flexWrap: 'wrap',
    gap: 10,
  },
  genreAndSeparator: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  genreText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  genreSeparator: {
    alignSelf: 'center',
  },
});
