import React from 'react';
import RoundSeparatorIcon from '../../assets/icons/RoundSeparatorIcon';
import {Text, View} from 'react-native';
import {styles} from './styles';
import useGetMovieTypes from '../../hooks/useGetTypes';

interface Props {
  ids: number[];
}

const GenreList = ({ids}: Props) => {
  const {data} = useGetMovieTypes();

  const genreIds = data?.genres.filter(type => ids.includes(type.id)) || [];

  const genres = genreIds.map(type => type.name);

  return (
    <View style={styles.genreContainer}>
      {genres.map((genre: string, index: number) => {
        return (
          <View key={genre} style={styles.genreAndSeparator}>
            <Text key={index} style={styles.genreText}>
              {genre}
            </Text>
            {index >= 0 && index <= genres.length - 2 && (
              <View key={genre} style={styles.genreSeparator}>
                <RoundSeparatorIcon width={10} height={10} />
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default GenreList;
