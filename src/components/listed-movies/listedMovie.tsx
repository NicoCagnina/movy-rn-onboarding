import React from 'react';
import {Movie} from '../../types/movies';
import {StackNavigation} from '../../types/navigation';
import {Image, TouchableOpacity} from 'react-native';
import {NavigationScreens} from '../../types/NavigationScreens';
import {styles} from './styles';
import Config from 'react-native-config';

const ListedMovie = ({
  item,
  selectMovie,
  navigation,
}: {
  item: Movie;
  selectMovie: (id: number) => void;
  navigation: StackNavigation;
}) => {
  const onMoviePress = () => {
    selectMovie(item.id);
    navigation.push(NavigationScreens.MovieDetails);
  };

  return (
    <TouchableOpacity onPress={onMoviePress}>
      <Image
        style={styles.movieImg}
        source={{uri: `${Config.IMAGE_URL}${item.poster_path}`}}
      />
    </TouchableOpacity>
  );
};

export default ListedMovie;
