import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { appScreens } from "../constants";
import SideDrawer from "../navigation/drawer";
import NewInterest from "../screens/newInterest";
import Bookmarks from "../screens/bookmarks";
import Chat from "../screens/chat";

export type AppStackParamList = {
  SideDrawer: undefined;
  NewInterest: undefined;
  Bookmarks: undefined;
  Chat: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={appScreens.SideDrawer} component={SideDrawer} />
      <Stack.Screen name={appScreens.NewInterest} component={NewInterest} />
      <Stack.Screen name={appScreens.Bookmarks} component={Bookmarks} />
      <Stack.Screen name={appScreens.Chat} component={Chat} />
    </Stack.Navigator>
  );
};

export default AppStack;
