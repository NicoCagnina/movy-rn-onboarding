import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingVertical: 20,
  },
  movieList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  movieImage: {
    width: 110,
    height: 180,
    margin: 5,
  },
});
