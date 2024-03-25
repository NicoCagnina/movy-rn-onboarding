import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import RecentlyAddedList from './recentlyAddedList';
import TrendingNowList from './trendingNowList';
import FavoritesList from './favoritesList';
import SimilarMovies from './similarMovies';

interface Props {
  title: string;
}

const renderActiveList = (title: string) => {
  switch (title) {
    case 'My List':
      return <FavoritesList />;
    case 'Trending Now':
      return <TrendingNowList />;
    case 'Recently Added':
      return <RecentlyAddedList />;
    case 'Similar Movies':
      return <SimilarMovies />;
    default:
      return null;
  }
};

const ListedMovies = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {renderActiveList(title)}
    </View>
  );
};

export default ListedMovies;
