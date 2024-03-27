import React from 'react';
import {FlatList} from 'react-native';
import {styles} from './styles';
import {useUserContext} from '../../context/userContext';
import ListedFavorite from './listedFavorite';

const FavoriteList = () => {
  const {favorites} = useUserContext();

  return (
    <FlatList
      data={favorites}
      testID="favorites-list"
      horizontal
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({item}) => <ListedFavorite item={item} />}
      keyExtractor={item => item.toString()}
    />
  );
};

export default FavoriteList;
