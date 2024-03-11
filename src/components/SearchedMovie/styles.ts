import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.softBlack,
    flexDirection: 'row',
    marginVertical: 3,
  },
  movieImage: {
    width: 160,
    height: 80,
    marginRight: 30,
  },
  infoContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  movieTitle: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: '500',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  halfStar: {
    bottom: 4,
    right: 2,
  },
});
