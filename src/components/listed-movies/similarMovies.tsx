import React from 'react';
import ListedMovie from './listedMovie';
import {useMovieContext} from '../../context/moviesContext';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/navigation';
import {FlatList} from 'react-native';
import {styles} from './styles';
import useGetSimilarMovies from '../../hooks/useGetSimilarMovies';

const SimilarMovies = () => {
  const {selectedMovie, selectMovie} = useMovieContext();
  const {data: movies} = useGetSimilarMovies(selectedMovie);
  const navigation = useNavigation<StackNavigation>();

  return (
    <FlatList
      data={movies}
      horizontal
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({item}) => (
        <ListedMovie
          item={item}
          selectMovie={selectMovie}
          navigation={navigation}
        />
      )}
      keyExtractor={item => item.id.toString() + '-similar'}
    />
  );
};

export default SimilarMovies;
