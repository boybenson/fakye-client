import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "../layouts/applayout";
import AuthStack from "../layouts/authlayout";
import { rootScreens } from "../constants";

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={rootScreens.Auth} component={AuthStack} />
        <Stack.Screen name={rootScreens.App} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
