import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "~/screens/Home";
import {
  RootStackParamList,
  MainTabParamList,
  HomeStackParamList,
  ItemsStackParamList,
  LooksStackParamList,
} from "./types";

const RootStackNavigator = createStackNavigator<RootStackParamList>();

const BottomTabNavigator = createBottomTabNavigator<MainTabParamList>();
const HomeStackNavigator = createStackNavigator<HomeStackParamList>();
const ItemsStackNavigator = createStackNavigator<ItemsStackParamList>();
const LooksStackNavigator = createStackNavigator<LooksStackParamList>();

function HomeStack(): JSX.Element {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStackNavigator.Screen name={"Home"} component={Home} />
    </HomeStackNavigator.Navigator>
  );
}

function ItemsStack(): JSX.Element {
  return (
    <ItemsStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ItemsStackNavigator.Screen name={"Items"} component={Home} />
    </ItemsStackNavigator.Navigator>
  );
}

function LooksStack(): JSX.Element {
  return (
    <LooksStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LooksStackNavigator.Screen name={"Looks"} component={Home} />
    </LooksStackNavigator.Navigator>
  );
}

function MainTab(): JSX.Element {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTabNavigator.Screen name="HomeStack" component={HomeStack} />
      <BottomTabNavigator.Screen name="ItemsStack" component={ItemsStack} />
      <BottomTabNavigator.Screen name="LooksStack" component={LooksStack} />
    </BottomTabNavigator.Navigator>
  );
}

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStackNavigator.Screen name="MainTab" component={MainTab} />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
}
