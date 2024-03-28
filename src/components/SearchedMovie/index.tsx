import React from 'react';
import {MovieDetails} from '../../types/movies';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {getImageUrl} from '../../utils/moviesUtils';
import {styles} from './styles';
import FullStarIcon from '../../assets/icons/FullStarIcon';
import HalfStarIcon from '../../assets/icons/HalfStarIcon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/navigation';
import {useMovieContext} from '../../context/moviesContext';
import {NavigationScreens} from '../../types/NavigationScreens';

interface Props {
  movie: MovieDetails;
}

const getMovieStars = (voteAverage: number) => {
  const stars = Math.floor(voteAverage / 2);
  const completedStars = Array(stars).fill(0);
  const hasHalfStar = voteAverage % 2;

  return (
    <View style={styles.starsContainer}>
      <FlatList
        data={completedStars}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => (
          <FullStarIcon testID="full-star-icon" width={24} height={24} />
        )}
        horizontal
        style={{maxWidth: 24 * completedStars.length}}
      />
      {hasHalfStar && (
        <View style={styles.halfStar}>
          <HalfStarIcon testID="half-star-icon" width={24} height={24} />
        </View>
      )}
    </View>
  );
};

const SearchedMovie = ({movie}: Props) => {
  const navigation = useNavigation<StackNavigation>();
  const {selectMovie} = useMovieContext();

  const selectPressedMovie = () => {
    selectMovie(movie.id);
    navigation.navigate(NavigationScreens.MovieDetails);
  };

  return (
    <Pressable
      testID="movie-pressable"
      onPress={selectPressedMovie}
      style={styles.container}>
      <Image
        source={{uri: getImageUrl(movie.poster_path)}}
        style={styles.movieImage}
      />
      <View testID="stars-container" style={styles.infoContainer}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        {getMovieStars(movie.vote_average)}
      </View>
    </Pressable>
  );
};

export default SearchedMovie;
