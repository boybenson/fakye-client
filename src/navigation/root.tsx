import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "../layouts/applayout";
import AuthStack from "../layouts/authlayout";
import { rootScreens } from "../constants";
import CustomSplash from "../screens/customsplash";

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
  Welcome: undefined;
  CustomSplash: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={rootScreens.CustomSplash}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={rootScreens.CustomSplash}
          component={CustomSplash}
        />
        <Stack.Screen name={rootScreens.Auth} component={AuthStack} />
        <Stack.Screen name={rootScreens.App} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
