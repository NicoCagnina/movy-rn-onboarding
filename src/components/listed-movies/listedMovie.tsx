import React from 'react';
import {Movie} from '../../types/movies';
import {StackNavigation} from '../../types/navigation';
import {Image, TouchableOpacity} from 'react-native';
import {NavigationScreens} from '../../types/NavigationScreens';
import {styles} from './styles';
import Config from 'react-native-config';
import {useNavigation} from '@react-navigation/native';
import {useMovieContext} from '../../context/moviesContext';

const ListedMovie = ({item}: {item: Movie}) => {
  const {selectMovie} = useMovieContext();
  const navigation = useNavigation<StackNavigation>();
  const onMoviePress = () => {
    selectMovie(item.id);
    navigation.push(NavigationScreens.MovieDetails);
  };

  return (
    <TouchableOpacity testID="listed-movie" onPress={onMoviePress}>
      <Image
        testID="movie-image"
        style={styles.movieImg}
        source={{uri: `${Config.IMAGE_URL}${item.poster_path}`}}
      />
    </TouchableOpacity>
  );
};

export default ListedMovie;
