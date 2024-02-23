import React from 'react';
import RoundSeparatorIcon from '../../assets/icons/RoundSeparatorIcon';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {getGenreText} from '../../utils/moviesUtils';

interface Props {
  ids: number[];
}

const GenreList = ({ids}: Props) => {
  return (
    <View style={styles.genreContainer}>
      {ids.slice(0, 3).map((genre, index) => {
        return (
          <View key={genre} style={styles.genreAndSeparator}>
            {index > 0 && index <= 2 && (
              <View key={genre} style={styles.genreSeparator}>
                <RoundSeparatorIcon width={10} height={10} />
              </View>
            )}
            <Text key={index} style={styles.genreText}>
              {getGenreText(genre)}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default GenreList;
