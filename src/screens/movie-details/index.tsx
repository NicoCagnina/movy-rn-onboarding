import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useGetMovieDetails from '../../hooks/useGetMovieDetails';
import Colors from '../../types/colors';
import {getImageUrl, getMovieApprovalPercentage} from '../../utils/moviesUtils';
import styles from './styles';
import MovyLogoIcon from '../../assets/icons/MovyLogoIcon';
import ActionButton from '../../components/action-button';
import ListedMovies from '../../components/listed-movies';
import {useMovieContext} from '../../context/moviesContext';
import {MovieDetails} from '../../types/movies';

interface HeaderProps {
  isLoading: boolean;
}

const HeaderComponent = ({isLoading}: HeaderProps) => {
  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.primary} />;
  }
};

const MovieDetailsScreen = () => {
  const {selectedMovie} = useMovieContext();
  const {data, error, isLoading} = useGetMovieDetails(selectedMovie!);
  const [contentLoading, setContentLoading] = useState(isLoading);
  const formattedDate = data?.release_date.slice(0, 4);

  useEffect(() => {
    setContentLoading(isLoading);
  }, [isLoading]);

  const renderMovieDetails = (item: MovieDetails) => {
    return (
      <View>
        <Image
          source={{uri: getImageUrl(item.poster_path)}}
          resizeMode="cover"
          onLoadEnd={() => setContentLoading(false)}
          style={styles.moviePoster}
        />
        <View style={styles.contentContainer}>
          <MovyLogoIcon fill={Colors.primary} />
          <Text style={styles.movieTitle}>{item.title}</Text>
          <View style={styles.movieDetailsContainer}>
            <Text style={styles.movieApproval}>
              {getMovieApprovalPercentage(item.vote_average)} Approval
            </Text>
            <Text style={styles.movieDate}>{formattedDate}</Text>
            {!item.adult && <Text style={styles.movieAge}>For all ages</Text>}
          </View>
          <TouchableOpacity
            testID="watch-trailer-button"
            style={styles.watchTrailerTouchable}>
            <Text style={styles.watchTrailerText}>Watch Trailer</Text>
          </TouchableOpacity>
          <Text style={styles.overview}>{item.overview}</Text>
          <View testID="add-to-list-button" style={styles.addToListContainer}>
            <ActionButton type="my-list" movie={item} />
          </View>
          <ListedMovies title="Similar Movies" />
        </View>
      </View>
    );
  };

  if (contentLoading || !data) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator
          testID="loading-indicator"
          size={'large'}
          color={Colors.primary}
        />
      </View>
    );
  }

  if (error) {
    return <Text>An error occurred: {error}</Text>;
  }

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={<HeaderComponent isLoading={contentLoading} />}
      data={[data]}
      ListFooterComponent={<View style={styles.footer} />}
      renderItem={({item}) => renderMovieDetails(item)}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default MovieDetailsScreen;
