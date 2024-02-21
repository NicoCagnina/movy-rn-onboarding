import React from 'react';
import {Text, View} from 'react-native';
import useGetTrendingMovies from '../../hooks/useGetTrendingMovies';

const HomeScreen = () => {
  const {data, error, isLoading} = useGetTrendingMovies();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>An error occurred: {error}</Text>;
  }

  return (
    <View>
      <Text>Movies</Text>
      {data &&
        data.map(movie => {
          return <Text key={movie.id}>Title: {movie.title}</Text>;
        })}
    </View>
  );
};

export default HomeScreen;
