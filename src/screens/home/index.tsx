import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import useGetTrendingMovies from '../../hooks/useGetTrendingMovies';
import Colors from '../../types/colors';
import HomeScreenHero from '../../components/home-hero';
import MovyLogoIcon from '../../assets/icons/MovyLogoIcon';
import {Movie} from '../../types/movies';
import {styles} from './styles';

const HomeScreen = () => {
  const {data, error, isLoading} = useGetTrendingMovies();
  const [highlightedMovie, setHighlightedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (data) {
      const randomMovie = Math.floor(Math.random() * 21);
      setHighlightedMovie(data[randomMovie]);
    }
  }, [data]);

  if (error) {
    return <Text>An error occurrred: {error}</Text>;
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

export default HomeScreen;
