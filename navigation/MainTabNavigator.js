import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import TrainScreen from "../screens/TrainScreen";
import BusScreen from "../screens/BusScreen";
import BikeScreen from "../screens/BikeScreen";
import TrainStopScreen from "../screens/TrainStopScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Train: TrainScreen,
  Bus: BusScreen,
  Bike: BikeScreen,
  Favorites: FavoritesScreen,
  // TrainStop: TrainStopScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === "ios" ? `ios-home` : "md-home"} />
};

const TrainStack = createStackNavigator({
  Train: TrainScreen
});

TrainStack.navigationOptions = {
  tabBarLabel: "Train",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-train" : "md-train"} />
};

const BusStack = createStackNavigator({
  Bus: BusScreen
});

BusStack.navigationOptions = {
  tabBarLabel: "Bus",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-bus" : "md-bus"} />
};

const BikeStack = createStackNavigator({
  Bike: BikeScreen
});

BikeStack.navigationOptions = {
  tabBarLabel: "Bike",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-bicycle" : "md-bicycle"} />
  )
};

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen
});

FavoritesStack.navigationOptions = {
  tabBarLabel: "Favorites",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-star" : "md-star"} />
};

const TrainStopStack = createStackNavigator({
  TrainStop: TrainStopScreen
});

// TrainStopStack.navigationOptions = {
//   tabBarLabel: "Train Stop",
//   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-star" : "md-star"} />
// };

export default createBottomTabNavigator({
  HomeStack,
  TrainStack,
  BusStack,
  BikeStack,
  FavoritesStack,
  // TrainStopStack
});
