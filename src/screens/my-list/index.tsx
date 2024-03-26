import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {useUserContext} from '../../context/userContext';
import MovieToRender from './movieToRender';

const MyListScreen = () => {
  const {favorites} = useUserContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        contentContainerStyle={styles.movieList}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <MovieToRender id={item} />}
      />
    </View>
  );
};

export default MyListScreen;
