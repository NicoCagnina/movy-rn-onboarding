import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import useGetTrendingMovies from '../../hooks/useGetTrendingMovies';
import Colors from '../../types/colors';
import HomeScreenHero from '../../components/home-hero';
import MovyLogoIcon from '../../assets/icons/MovyLogoIcon';
import {Movie} from '../../types/movies';

const HomeScreen = () => {
  const {data, error, isLoading} = useGetTrendingMovies();
  const [highlightedMovie, setHighlightedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (data) {
      setHighlightedMovie(data[2]);
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
      {isLoading && <ActivityIndicator size={80} color={Colors.primary} />}
      <HomeScreenHero movie={highlightedMovie} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.black,
    height: '100%',
  },
  movyLogoIconContainer: {
    top: 20,
    position: 'absolute',
    zIndex: 1,
  },
  activityIndicator: {
    marginTop: '50%',
  },
});

export default HomeScreen;
