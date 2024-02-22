import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Movie} from '../../types/movies';
import {getGenreText, getImageUrl} from '../../utils/moviesUtils';
import Colors from '../../types/colors';
import RoundSeparatorIcon from '../../assets/icons/RoundSeparatorIcon';
import PlayIcon from '../../assets/icons/PlayIcon';
import InfoIcon from '../../assets/icons/InfoIcon';
import AddToListIcon from '../../assets/icons/AddListIcon';

const HomeScreenHero = ({movie}: {movie: Movie | null}) => {
  if (!movie) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image
        source={{uri: getImageUrl(movie.poster_path)}}
        style={styles.heroImg}
      />
      <Image
        source={require('../../assets/images/blur-shadow.png')}
        style={styles.heroBlur}
        blurRadius={1}
      />
      <View style={styles.genreContainer}>
        {movie.genre_ids.slice(0, 3).map((genre, index) => {
          return (
            <>
              {index > 0 && index <= 2 && (
                <View key={genre} style={styles.genreSeparator}>
                  <RoundSeparatorIcon width={10} height={10} />
                </View>
              )}
              <Text key={index} style={[styles.whiteText, styles.genreText]}>
                {getGenreText(genre)}
              </Text>
            </>
          );
        })}
      </View>
      <View style={styles.movyOriginalContainer}>
        <Text style={styles.movyOriginalText}>MOVY ORIGINAL</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconWithText} onPress={() => {}}>
          <AddToListIcon fill={Colors.white} />
          <Text style={styles.whiteText}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWithText} onPress={() => {}}>
          <PlayIcon fill={Colors.white} height={43} />
          <Text style={styles.whiteText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWithText} onPress={() => {}}>
          <InfoIcon fill={Colors.white} />
          <Text style={styles.whiteText}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  genreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '40%',
    gap: 20,
    marginTop: '95%',
    lineHeight: 30,
  },
  genreText: {
    fontSize: 18,
    fontWeight: '500',
  },
  genreSeparator: {
    alignSelf: 'center',
  },
  movyOriginalContainer: {
    backgroundColor: 'rgba(5, 120, 255, 0.2)',
    paddingHorizontal: 40,
    paddingVertical: 3,
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
  iconWithText: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreenHero;
