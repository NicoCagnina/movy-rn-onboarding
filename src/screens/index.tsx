import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyListScreen from './my-list';
import SearchScreen from './search';
import HomeScreen from './home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigation';

const Tab = createBottomTabNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="MyList"
          component={MyListScreen}
          options={{tabBarShowLabel: false}}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{tabBarShowLabel: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
