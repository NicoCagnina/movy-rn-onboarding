import React from 'react';
import ListedMovie from './listedMovie';
import {useMovieContext} from '../../context/moviesContext';
import {FlatList} from 'react-native';
import {styles} from './styles';
import useGetSimilarMovies from '../../hooks/useGetSimilarMovies';

const SimilarMovies = () => {
  const {selectedMovie} = useMovieContext();
  const {data: movies} = useGetSimilarMovies(selectedMovie);

  return (
    <FlatList
      data={movies}
      horizontal
      testID="similar-movies-list"
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({item}) => <ListedMovie item={item} />}
      keyExtractor={item => item.id.toString() + '-similar'}
    />
  );
};

export default SimilarMovies;
