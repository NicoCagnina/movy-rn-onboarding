import React from 'react';
import {ActivityIndicator, Image} from 'react-native';
import Colors from '../../types/colors';
import {getImageUrl} from '../../utils/moviesUtils';
import {styles} from './styles';
import useGetMovieDetails from '../../hooks/useGetMovieDetails';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useMovieContext} from '../../context/moviesContext';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/navigation';
import {NavigationScreens} from '../../types/NavigationScreens';

const MovieToRender = ({id}: {id: number}) => {
  const {data, isLoading} = useGetMovieDetails(id);
  const {selectMovie} = useMovieContext();
  const navigation = useNavigation<StackNavigation>();

  const onMoviePress = () => {
    selectMovie(id);
    navigation.push(NavigationScreens.MovieDetails);
  };

  if (isLoading || !data) {
    return <ActivityIndicator size="large" color={Colors.white} />;
  }
  return (
    <TouchableOpacity onPress={onMoviePress}>
      <Image
        source={{uri: getImageUrl(data.poster_path)}}
        style={styles.movieImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default MovieToRender;
