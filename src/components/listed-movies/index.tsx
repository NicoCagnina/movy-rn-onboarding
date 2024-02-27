import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Movie} from '../../types/movies';
import Config from 'react-native-config';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/navigation';
import {NavigationScreens} from '../../types/NavigationScreens';

interface Props {
  movies: Movie[] | null;
  title: string;
}

const ListedMovies = ({movies, title}: Props) => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={movies}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationScreens.MovieDetails, {
                id: item.id,
              })
            }>
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
