export type RootStackParamList = {
  MainTab: NavigatorScreenParams<MainTabParamList>;
};

export type MainTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  ItemsStack: NavigatorScreenParams<ItemsStackParamList>;
  LooksStack: NavigatorScreenParams<LooksStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type ItemsStackParamList = {
  Items: undefined;
};

export type LooksStackParamList = {
  Looks: LooksStackParamList;
};
