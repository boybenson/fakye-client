import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/signup";
import SignIn from "../screens/signIn";
import { authScreens, welcomeScreens } from "../constants";
import Otp from "../screens/otp";
import Welcome from "../screens/welcome";

export type WelcomeStackParamList = {
  Intro: undefined;
};

const Stack = createNativeStackNavigator<WelcomeStackParamList>();

const WelcomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={welcomeScreens.Intro} component={Welcome} />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
