import React, {useState} from 'react';
import {StyleProp, TextInput, View, ViewStyle} from 'react-native';
import {styles} from './styles';
import SearchIcon from '../../assets/icons/SearchIcon';
import Colors from '../../types/colors';
import debounce from 'lodash.debounce';
import MicIcon from '../../assets/icons/MicIcon';

interface Props {
  setSearchInputValue: (value: string) => void;
}

const getSearchBarDisplay = (searchBarFocused: boolean) => {
  return {display: searchBarFocused ? 'none' : 'flex'} as StyleProp<ViewStyle>;
};

const SearchBar = ({setSearchInputValue}: Props) => {
  const [searchBarFocused, setSearchBarFocused] = useState(false);

  const toggleFocus = () => {
    setSearchBarFocused(prev => !prev);
  };

  const changeSearchString = debounce(
    (text: string) => setSearchInputValue(text),
    500,
  );

  return (
    <View style={styles.container}>
      <View style={getSearchBarDisplay(searchBarFocused)}>
        <SearchIcon fill={Colors.white} width={28} height={28} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search for a movie that you love…"
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        autoFocus={false}
        onChangeText={changeSearchString}
        placeholderTextColor={Colors.white}
        underlineColorAndroid="transparent"
      />
      <MicIcon fill={Colors.white} width={20} height={20} />
    </View>
  );
};

export default SearchBar;
