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
  const {data, error, isLoading} = useGetTrendingMovies();
  const {addMovies} = useMovieContext();
  const [highlightedMovie, setHighlightedMovie] = useState<Movie | null>(null);
  const sections = ['My List', 'Trending Now', 'Recently Added'];

  useEffect(() => {
    if (data) {
      const randomMovie = Math.floor(Math.random() * 21);
      setHighlightedMovie(data[randomMovie]);
      addMovies(data);
    }
  }, [data]);

  if (error) {
    return <Text>An error occurred: {error}</Text>;
  }

  if (isLoading) {
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
            isLoading={isLoading}
            highlightedMovie={highlightedMovie}
          />
        }
        data={sections}
        renderItem={({item, index}) => (
          <ListedMovies
            key={item}
            title={
              index === 0
                ? 'My List'
                : index === 1
                ? 'Trending Now'
                : 'Recently Added'
            }
          />
        )}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};

export default HomeScreen;
