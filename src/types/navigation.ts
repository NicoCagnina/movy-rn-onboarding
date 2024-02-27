import {NavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootTabParamList = {
  Home: undefined;
  MyList: undefined;
  Search: undefined;
};

export type RootStackParamList = {
  TabNavigator: undefined;
  MovieDetails: undefined;
};

export type StackNavigation = StackNavigationProp<RootStackParamList> & {
  push: (
    screen: keyof RootStackParamList,
    params?: RootStackParamList[keyof RootStackParamList],
  ) => void;
};
export type RouteProps = RouteProp<RootStackParamList>;

export type NavigationType = NavigationProp<RootTabParamList>;
