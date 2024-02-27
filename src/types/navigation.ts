import {NavigationProp, RouteProp} from '@react-navigation/native';

export type RootTabParamList = {
  Home: undefined;
  MyList: undefined;
  Search: undefined;
};

export type RootStackParamList = {
  TabNavigator: undefined;
  MovieDetails: {
    id: number;
  };
};

export type StackNavigation = NavigationProp<RootStackParamList>;
export type RouteProps = RouteProp<RootStackParamList>;

export type NavigationType = NavigationProp<RootTabParamList>;
