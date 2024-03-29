import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import LibraryScreen from '../components/library/LibraryScreen';
import SearchScreen from '../components/search/SearchScreen';
import PodcastDetailsScreen from '../components/podcastDetails/PodcastDetailsScreen';
import EpisodeDetailsScreen from '../components/episodeDetails/EpisodeDetailsScreen';
import {theme} from '../constants/theme';
import {MiniPlayer} from '../components/miniPlayer/MiniPlayer';

const ListenNowStack = createStackNavigator();

const ICON_SIZE = 24;

const ListenNowNavigator = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen
        options={{
          title: 'Listen Now',
        }}
        name="ListenNow"
        component={ListenNowScreen}
      />
    </ListenNowStack.Navigator>
  );
};

const LibraryStack = createStackNavigator();

const LibraryNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        options={{
          title: 'Library',
        }}
        name="Library"
        component={LibraryScreen}
      />
    </LibraryStack.Navigator>
  );
};

const SearchStack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerTintColor: theme.color.blueLight,
        headerTitleStyle: {
          color: theme.color.black,
        },
        headerBackTitle: 'Back',
      }}>
      <SearchStack.Screen
        options={{
          title: 'Search',
        }}
        name="Search"
        component={SearchScreen}
      />
      <SearchStack.Screen
        name="PodcastDetailsScreen"
        component={PodcastDetailsScreen}
        options={{
          headerTitle: '',
        }}
      />
      <SearchStack.Screen
        name="EpisodeDetailsScreen"
        component={EpisodeDetailsScreen}
        options={{
          headerTitle: '',
        }}
      />
    </SearchStack.Navigator>
  );
};

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      tabBar={(tabsProps) => (
        <>
          <MiniPlayer />
          <BottomTabBar {...tabsProps} />
        </>
      )}
      tabBarOptions={{
        activeTintColor: theme.color.blueLight,
      }}>
      <MainTab.Screen
        options={{
          title: 'Listen Now',
          tabBarIcon: ({color}) => (
            <FeatherIcon size={ICON_SIZE} name="headphones" color={color} />
          ),
        }}
        name="ListenNow"
        component={ListenNowNavigator}
      />
      <MainTab.Screen
        options={{
          title: 'Library',
          tabBarIcon: ({color}) => (
            <FeatherIcon size={ICON_SIZE} name="inbox" color={color} />
          ),
        }}
        name="Library"
        component={LibraryNavigator}
      />
      <MainTab.Screen
        options={{
          title: 'Search',
          tabBarIcon: ({color}) => (
            <FeatherIcon size={ICON_SIZE} name="search" color={color} />
          ),
        }}
        name="Search"
        component={SearchNavigator}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
