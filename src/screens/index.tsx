import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyListScreen from './my-list';
import SearchScreen from './search';
import HomeScreen from './home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigation';
import Colors from '../types/colors';
import HomeIcon from '../assets/icons/HomeIcon';
import MyListIcon from '../assets/icons/MyList';
import SearchIcon from '../assets/icons/SearchIcon';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';

const Tab = createBottomTabNavigator<RootStackParamList>();

const renderHomeIcon = (color: string) => (
  <HomeIcon fill={color} width={32} height={32} />
);

const renderMyListIcon = (color: string) => (
  <MyListIcon fill={color} width={32} height={32} />
);

const renderSearchIcon = (color: string) => (
  <SearchIcon fill={color} width={32} height={32} />
);

function AppNavigator() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
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
            name="Home"
            component={HomeScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({color}) => renderHomeIcon(color),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({color}) => renderSearchIcon(color),
            }}
          />
          <Tab.Screen
            name="MyList"
            component={MyListScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({color}) => renderMyListIcon(color),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default AppNavigator;
