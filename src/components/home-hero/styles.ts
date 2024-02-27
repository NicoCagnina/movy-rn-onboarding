import {StyleSheet} from 'react-native';
import Colors from '../../types/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  movyLogoIconContainer: {
    top: 50,
  },
  heroImg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.8,
  },
  heroBlur: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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
    marginTop: 30,
    marginBottom: 10,
    gap: 50,
  },
});
