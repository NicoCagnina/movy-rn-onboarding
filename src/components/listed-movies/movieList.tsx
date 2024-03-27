import React from 'react';
import ListedMovie from './listedMovie';
import {FlatList} from 'react-native';
import {styles} from './styles';
import {Movie} from '../../types/movies';

interface Props {
  movies: Movie[] | null;
  testID?: string;
}

const MovieList = ({movies, testID = 'movie-list'}: Props) => {
  return (
    <FlatList
      data={movies}
      testID={testID}
      horizontal
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({item}) => <ListedMovie item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default MovieList;
