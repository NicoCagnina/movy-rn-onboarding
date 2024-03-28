import React from 'react';
import {StackNavigation} from '../../types/navigation';
import {ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import {NavigationScreens} from '../../types/NavigationScreens';
import {styles} from './styles';
import Config from 'react-native-config';
import {useNavigation} from '@react-navigation/native';
import {useMovieContext} from '../../context/moviesContext';
import useGetMovieDetails from '../../hooks/useGetMovieDetails';
import Colors from '../../types/colors';

const ListedFavorite = ({item}: {item: number}) => {
  const {data, isLoading} = useGetMovieDetails(item);
  const {selectMovie} = useMovieContext();
  const navigation = useNavigation<StackNavigation>();

  const onMoviePress = () => {
    selectMovie(item);
    navigation.push(NavigationScreens.MovieDetails);
  };

  if (isLoading || !data) {
    return (
      <ActivityIndicator
        testID="loading-indicator"
        size="large"
        color={Colors.white}
      />
    );
  }
  return (
    <TouchableOpacity onPress={onMoviePress}>
      <Image
        testID="movie-image"
        style={styles.movieImg}
        source={{uri: `${Config.IMAGE_URL}${data.poster_path}`}}
      />
    </TouchableOpacity>
  );
};

export default ListedFavorite;
