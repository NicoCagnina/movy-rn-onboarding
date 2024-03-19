import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import SearchBar from '../../components/searchbar';
import SearchedMovie from '../../components/SearchedMovie';
import {useMovieContext} from '../../context/moviesContext';

const SearchScreen = () => {
  const {filteredMovies} = useMovieContext();
  const [searchInputValue, setSearchInputValue] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar setSearchInputValue={setSearchInputValue} />
      <Text style={styles.popularSearches}>Popular Searches</Text>
      <FlatList
        data={filteredMovies(searchInputValue)}
        keyExtractor={item => item?.title}
        renderItem={({item}) => <SearchedMovie movie={item} />}
      />
    </View>
  );
};

export default SearchScreen;
