import React from 'react';
import {FlatList} from 'react-native';
import {styles} from './styles';
import {useUserContext} from '../../context/userContext';
import ListedFavorite from './listedFavorite';

const MovieList = () => {
  const {favorites} = useUserContext();

  return (
    <FlatList
      data={favorites}
      horizontal
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({item}) => <ListedFavorite item={item} />}
      keyExtractor={item => item.toString()}
    />
  );
};

export default MovieList;
