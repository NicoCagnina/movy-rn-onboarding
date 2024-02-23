import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import useGetMovieDetails from '../../hooks/useGetMovieDetails';
import Colors from '../../types/colors';
import {RouteProps} from '../../types/navigation';
import {getImageUrl} from '../../utils/moviesUtils';
import styles from './styles';

const MovieDetailsScreen = () => {
  const route = useRoute<RouteProps>();
  const {params} = route;
  const id = params!.id;
  const {data, error, isLoading} = useGetMovieDetails(id);
  const [imageLoading, setImageLoading] = useState(true);

  if (isLoading || !data) {
    return (
      <View style={[styles.container]}>
        <ActivityIndicator size={80} color={Colors.primary} />
      </View>
    );
  }

  if (error) {
    return <Text>An error occurred: {error}</Text>;
  }

  return (
    <View>
      {imageLoading && (
        <ActivityIndicator size="large" color={Colors.primary} />
      )}
      <Image
        source={{uri: getImageUrl(data.poster_path)}}
        height={300}
        onLoadEnd={() => setImageLoading(false)}
      />
      <Text>{data.name}</Text>
      <Text>{data.adult}</Text>
      <Text>{data.overview}</Text>
      <Text>{data.release_date}</Text>
      <Text>{data.vote_average}</Text>
    </View>
  );
};

export default MovieDetailsScreen;
