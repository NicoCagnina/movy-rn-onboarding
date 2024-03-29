import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyListScreen from './my-list';
import SearchScreen from './search';
import HomeScreen from './home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList, RootTabParamList} from '../types/navigation';
import Colors from '../types/colors';
import HomeIcon from '../assets/icons/HomeIcon';
import LeftArrowIcon from '../assets/icons/LeftArrowIcon';
import MyListIcon from '../assets/icons/MyList';
import SearchIcon from '../assets/icons/SearchIcon';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import MovieDetailsScreen from './movie-details';
import {NavigationScreens} from '../types/NavigationScreens';
import LoginScreen from './login';
import {useUserContext} from '../context/userContext';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const renderHomeIcon = (color: string) => (
  <HomeIcon fill={color} width={32} height={32} />
);

const renderMyListIcon = (color: string) => (
  <MyListIcon fill={color} width={32} height={32} />
);

const renderSearchIcon = (color: string) => (
  <SearchIcon fill={color} width={32} height={32} />
);

const renderLeftArrowIcon = (color: string) => (
  <LeftArrowIcon
    stroke={color}
    width={32}
    height={32}
    style={styles.backButton}
  />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: {
          backgroundColor: Colors.tabBackground,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name={NavigationScreens.Home}
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => renderHomeIcon(color),
        }}
      />
      <Tab.Screen
        name={NavigationScreens.Search}
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => renderSearchIcon(color),
        }}
      />
      <Tab.Screen
        name={NavigationScreens.MyList}
        component={MyListScreen}
        options={({navigation}) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => renderMyListIcon(color),
          headerShown: true,
          headerTitle: 'My list',
          headerTitleAlign: 'center',
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          headerTintColor: Colors.white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              {renderLeftArrowIcon(Colors.white)}
            </TouchableOpacity>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

function AppNavigator() {
  const {isSignedIn} = useUserContext();

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        {isSignedIn ? (
          <Stack.Navigator>
            <Stack.Screen
              name={NavigationScreens.TabNavigator}
              component={TabNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={NavigationScreens.MovieDetails}
              component={MovieDetailsScreen}
              options={({navigation}) => ({
                headerTitle: 'Movie Details',
                headerTitleAlign: 'center',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerTintColor: Colors.white,
                headerBackTitleVisible: false,
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    {renderLeftArrowIcon(Colors.white)}
                  </TouchableOpacity>
                ),
              })}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name={NavigationScreens.Login}
              component={LoginScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default AppNavigator;
