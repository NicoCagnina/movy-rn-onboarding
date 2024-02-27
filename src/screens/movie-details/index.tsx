import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
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
import {RouteProps} from '../../types/navigation';
import {getImageUrl, getMovieApprovalPercentage} from '../../utils/moviesUtils';
import styles from './styles';
import MovyLogoIcon from '../../assets/icons/MovyLogoIcon';
import ActionButton from '../../components/action-button';
import AddToListIcon from '../../assets/icons/AddListIcon';

interface HeaderProps {
  isLoading: boolean;
}

const HeaderComponent = ({isLoading}: HeaderProps) => {
  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.primary} />;
  }
};

const MovieDetailsScreen = () => {
  const route = useRoute<RouteProps>();
  const {params} = route;
  const id = params!.id;
  const {data, error, isLoading} = useGetMovieDetails(id);
  const [contentLoading, setContentLoading] = useState(isLoading);
  const formattedDate = data?.release_date.slice(0, 4);

  useEffect(() => {
    console.log({isLoading, data});
    setContentLoading(isLoading);
  }, [isLoading]);

  if (contentLoading || !data) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size={'large'} color={Colors.primary} />
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
      renderItem={({item}) => (
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
            <TouchableOpacity style={styles.watchTrailerTouchable}>
              <Text style={styles.watchTrailerText}>Watch Trailer</Text>
            </TouchableOpacity>
            <Text style={styles.overview}>{item.overview}</Text>
            <View style={styles.addToListContainer}>
              <ActionButton
                icon={<AddToListIcon fill={Colors.white} height={42} />}
                text="My List"
              />
            </View>
            <Text style={styles.similarMovies}>Similar movies</Text>
          </View>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default MovieDetailsScreen;
