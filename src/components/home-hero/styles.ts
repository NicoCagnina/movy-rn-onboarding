import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',
  },
  movyLogoIconContainer: {
    top: 50,
  },
  heroImg: {
    width: '100%',
    height: '80%',
    position: 'absolute',
    opacity: 0.8,
  },
  heroBlur: {
    position: 'absolute',
    width: '100%',
    height: '80%',
  },
  whiteText: {
    color: Colors.white,
  },
  movyOriginalContainer: {
    backgroundColor: Colors.movyOriginalBackground,
    paddingHorizontal: 40,
    paddingVertical: 4,
    marginTop: 15,
    borderRadius: 5,
  },
  movyOriginalText: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.primary,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 20,
    gap: 50,
  },
});
