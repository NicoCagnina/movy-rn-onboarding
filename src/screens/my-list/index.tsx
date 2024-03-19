import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {styles} from './styles';
import {useMovieContext} from '../../context/moviesContext';
import {getImageUrl} from '../../utils/moviesUtils';
import {Movie} from '../../types/movies';

const MyListScreen = () => {
  const {movies} = useMovieContext();

  const renderImg = (item: Movie) => {
    return (
      <Image
        source={{uri: getImageUrl(item.poster_path)}}
        style={styles.movieImage}
        resizeMode="contain"
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        contentContainerStyle={styles.movieList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderImg(item)}
      />
    </View>
  );
};

export default MyListScreen;
