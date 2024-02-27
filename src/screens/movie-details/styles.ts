import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  activityIndicator: {
    height: '100%',
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    top: 20,
    paddingHorizontal: 20,
  },
  moviePoster: {
    width: '100%',
    height: 450,
  },
  movieTitle: {
    color: Colors.white,
    letterSpacing: 1.2,
    lineHeight: 40,
    fontSize: 32,
    fontWeight: '800',
    marginTop: 10,
  },
  movieDetailsContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginTop: 20,
    height: 40,
  },
  movieApproval: {
    color: Colors.approvalGreen,
    letterSpacing: 0.8,
    fontSize: 18,
    fontWeight: '800',
  },
  movieDate: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  movieAge: {
    color: Colors.allAgesBackground,
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.allAgesText,
    fontWeight: '500',
  },
  watchTrailerTouchable: {
    textAlign: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    marginTop: 10,
  },
  watchTrailerText: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  overview: {
    color: Colors.white,
    fontSize: 18,
    marginTop: 20,
    lineHeight: 25,
  },
  addToListContainer: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  similarMovies: {
    color: Colors.white,
    fontSize: 24,
    marginTop: 30,
    fontWeight: '700',
  },
});

export default styles;
