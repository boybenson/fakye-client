import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { appScreens } from "../constants";
import SideDrawer from "../navigation/drawer";
import NewInterest from "../screens/newInterest";
import Bookmarks from "../screens/bookmarks";

export type AppStackParamList = {
  SideDrawer: undefined;
  NewInterest: undefined;
  Bookmarks: undefined;
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
    </Stack.Navigator>
  );
};

export default AppStack;
