import React from 'react';
import {Image, Text, View} from 'react-native';
import {Movie} from '../../types/movies';
import {getImageUrl} from '../../utils/moviesUtils';
import Colors from '../../types/colors';
import PlayIcon from '../../assets/icons/PlayIcon';
import InfoIcon from '../../assets/icons/InfoIcon';
import AddToListIcon from '../../assets/icons/AddListIcon';
import GenreList from '../genre-list';
import ActionButton from '../action-button';
import {styles} from './styles';

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
      <GenreList ids={movie.genre_ids} />
      <View style={styles.movyOriginalContainer}>
        <Text style={styles.movyOriginalText}>MOVY ORIGINAL</Text>
      </View>
      <View style={styles.iconContainer}>
        <ActionButton
          icon={<AddToListIcon fill={Colors.white} height={42} />}
          text="My List"
        />
        <ActionButton icon={<PlayIcon fill={Colors.white} />} text="Play" />
        <ActionButton icon={<InfoIcon fill={Colors.white} />} text="Info" />
      </View>
    </View>
  );
};

export default HomeScreenHero;
