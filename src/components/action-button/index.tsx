import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Movie, MovieDetails} from '../../types/movies';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/navigation';
import {useMovieContext} from '../../context/moviesContext';
import {useUserContext} from '../../context/userContext';
import {NavigationScreens} from '../../types/NavigationScreens';
import AddToListIcon from '../../assets/icons/AddListIcon';
import PlayIcon from '../../assets/icons/PlayIcon';
import InfoIcon from '../../assets/icons/InfoIcon';
import Colors from '../../types/colors';
import CheckIcon from '../../assets/icons/CheckIcon';

interface Props {
  type: string;
  movie: Movie | MovieDetails;
}

const ActionButton = ({type, movie}: Props) => {
  const navigation = useNavigation<StackNavigation>();
  const {selectMovie} = useMovieContext();
  const {addFavorites, removeFavorites, isMovieFavorite} = useUserContext();

  const getUiByType = () => {
    switch (type) {
      case 'my-list':
        return (
          <>
            {myListIcon()}
            <Text style={styles.whiteText}>My List</Text>
          </>
        );
      case 'play':
        return (
          <>
            <PlayIcon fill={Colors.white} />
            <Text style={styles.whiteText}>Play</Text>
          </>
        );
      case 'info':
        return (
          <>
            <InfoIcon fill={Colors.white} />
            <Text style={styles.whiteText}>Info</Text>
          </>
        );
      default:
        return null;
    }
  };

  const myListIcon = () => {
    if (isMovieFavorite(movie.id)) {
      return <CheckIcon fill={Colors.white} height={42} />;
    }
    return <AddToListIcon fill={Colors.white} height={42} />;
  };

  const handleOnPress = () => {
    if (type === 'my-list') {
      isMovieFavorite(movie.id)
        ? removeFavorites([movie.id])
        : addFavorites([movie.id]);
    }
    if (type === 'info') {
      return onPressMovie();
    }
  };

  const onPressMovie = () => {
    selectMovie(movie.id);
    navigation.navigate(NavigationScreens.MovieDetails);
  };

  return (
    <TouchableOpacity
      testID="action-button-container"
      style={styles.iconWithText}
      onPress={handleOnPress}>
      {getUiByType()}
    </TouchableOpacity>
  );
};

export default ActionButton;
