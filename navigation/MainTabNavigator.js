import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TrainScreen from '../screens/TrainScreen';
import BusScreen from '../screens/BusScreen';
import BikeScreen from '../screens/BikeScreen';

import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-person`
          : 'md-person'
      }
    />
  ),
};

const TrainStack = createStackNavigator({
  Train: TrainScreen,
});

TrainStack.navigationOptions = {
  tabBarLabel: 'Train',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-train' : 'md-train'}
    />
  ),
};

const BusStack = createStackNavigator({
  Bus: BusScreen,
});

BusStack.navigationOptions = {
  tabBarLabel: 'Bus',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-bus' : 'md-bus'}
    />
  ),
};

const BikeStack = createStackNavigator({
  Bike: BikeScreen,
});

BikeStack.navigationOptions = {
  tabBarLabel: 'Bike',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-bicycle' : 'md-bicycle'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  TrainStack,
  BusStack,
  BikeStack,
  SettingsStack,
});
