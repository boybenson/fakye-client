import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/signup";
import SignIn from "../screens/signIn";
import { authScreens } from "../constants";
import Otp from "../screens/otp";

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Otp: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={authScreens.SignIn} component={SignIn} />
      <Stack.Screen name={authScreens.SignUp} component={SignUp} />
      <Stack.Screen name={authScreens.Otp} component={Otp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
