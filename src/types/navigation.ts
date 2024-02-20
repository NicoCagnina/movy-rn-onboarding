import {NavigationProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  MyList: undefined;
  Search: undefined;
};

export type NavigationType = NavigationProp<RootStackParamList>;
