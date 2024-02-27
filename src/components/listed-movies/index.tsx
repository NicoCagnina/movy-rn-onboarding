import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Config from 'react-native-config';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/navigation';
import {NavigationScreens} from '../../types/NavigationScreens';
import {useMovieContext} from '../../context/moviesContext';

interface Props {
  title: string;
}

const ListedMovies = ({title}: Props) => {
  const navigation = useNavigation<StackNavigation>();
  const {movies, selectMovie} = useMovieContext();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={movies}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => (
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
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ListedMovies;
