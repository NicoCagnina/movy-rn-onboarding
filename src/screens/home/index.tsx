import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import useGetTrendingMovies from '../../hooks/useGetTrendingMovies';
import Colors from '../../types/colors';
import HomeScreenHero from '../../components/home-hero';
import MovyLogoIcon from '../../assets/icons/MovyLogoIcon';
import {Movie} from '../../types/movies';
import {styles} from './styles';
import ListedMovies from '../../components/listed-movies';
import {useMovieContext} from '../../context/moviesContext';
import useGetRecentlyAddedMovies from '../../hooks/useGetRecentlyAddedMovies';

interface HeaderComponentProps {
  isLoading: boolean;
  highlightedMovie: Movie | null;
}

const HeaderComponent = ({
  isLoading,
  highlightedMovie,
}: HeaderComponentProps) => {
  return (
    <>
      {isLoading && <ActivityIndicator size={80} color={Colors.primary} />}
      <HomeScreenHero movie={highlightedMovie} />
    </>
  );
};

const HomeScreen = () => {
  const {
    data: trendingMovies,
    error: trendingMoviesError,
    isLoading: loadingTrendingMovies,
  } = useGetTrendingMovies();
  const {
    data: recentlyAddedMovies,
    error: recentlyAddedMoviesError,
    isLoading: loadingRecentlyAddedMovies,
  } = useGetRecentlyAddedMovies();
  const {addMovies, addRecentlyAddedMovies} = useMovieContext();
  const [highlightedMovie, setHighlightedMovie] = useState<Movie | null>(null);
  const sections = ['My List', 'Trending Now', 'Recently Added'];

  useEffect(() => {
    if (trendingMovies) {
      const randomMovie = Math.floor(Math.random() * 21);
      setHighlightedMovie(trendingMovies[randomMovie]);
      addMovies(trendingMovies);
    }
    if (recentlyAddedMovies) {
      console.log(recentlyAddedMovies);
      addRecentlyAddedMovies(recentlyAddedMovies);
    }
  }, [trendingMovies]);

  if (trendingMoviesError || recentlyAddedMoviesError) {
    return (
      <Text>
        An error occurred: {trendingMoviesError || recentlyAddedMoviesError}
      </Text>
    );
  }

  if (loadingRecentlyAddedMovies || loadingTrendingMovies) {
    return (
      <View style={[styles.container]}>
        <ActivityIndicator
          size={80}
          color={Colors.primary}
          style={styles.activityIndicator}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.movyLogoIconContainer}>
        <MovyLogoIcon fill={Colors.primary} />
      </View>
      <FlatList
        style={styles.flatlistStyle}
        ListHeaderComponent={
          <HeaderComponent
            isLoading={loadingTrendingMovies || loadingRecentlyAddedMovies}
            highlightedMovie={highlightedMovie}
          />
        }
        data={sections}
        renderItem={({item, index}) => (
          <ListedMovies key={item} title={sections[index]} />
        )}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};

export default HomeScreen;
