import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Config from 'react-native-config';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/navigation';
import {NavigationScreens} from '../../types/NavigationScreens';
import {useMovieContext} from '../../context/moviesContext';
import {Movie} from '../../types/movies';

interface Props {
  title: string;
}

const ItemToRender = ({
  item,
  selectMovie,
  navigation,
}: {
  item: Movie;
  selectMovie: (id: number) => void;
  navigation: StackNavigation;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        selectMovie(item.id);
        navigation.push(NavigationScreens.MovieDetails);
      }}>
      <Image
        style={styles.movieImg}
        source={{uri: `${Config.IMAGE_URL}${item.poster_path}`}}
      />
    </TouchableOpacity>
  );
};

const ListedMovies = ({title}: Props) => {
  const {movies, selectMovie} = useMovieContext();
  const navigation = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={movies}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => (
          <ItemToRender
            item={item}
            selectMovie={selectMovie}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ListedMovies;
