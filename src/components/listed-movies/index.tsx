import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import MovieList from './movieList';
import {useMovieContext} from '../../context/moviesContext';
import useGetSimilarMovies from '../../hooks/useGetSimilarMovies';
import ListedFavorites from './favoritesList';

interface Props {
  title: string;
}

const ListedMovies = ({title}: Props) => {
  const {movies, recentlyAddedMovies, selectedMovie} = useMovieContext();
  const {data: similarMovies} = useGetSimilarMovies(selectedMovie);

  const renderActiveList = () => {
    switch (title) {
      case 'My List':
        return <ListedFavorites />;
      case 'Trending Now':
        return <MovieList testID="trending-now-list" movies={movies} />;
      case 'Recently Added':
        return (
          <MovieList
            testID="recently-added-list"
            movies={recentlyAddedMovies}
          />
        );
      case 'Similar Movies':
        return (
          <MovieList testID="similar-movies-list" movies={similarMovies} />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {renderActiveList()}
    </View>
  );
};

export default ListedMovies;
