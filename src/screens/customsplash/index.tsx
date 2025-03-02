import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import AppText from "../../common/Core/AppText";
import useAuthStore from "../../zustand/auth-store";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/root";

SplashScreen.preventAutoHideAsync();

const CustomSplash = () => {
  const user = useAuthStore((state) => state.user);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const navigateAndHideSplash = async () => {
      if (user) {
        navigation.reset({ index: 0, routes: [{ name: "App" }] });
      } else {
        navigation.reset({ index: 0, routes: [{ name: "Auth" }] });
      }

      requestAnimationFrame(async () => {
        await SplashScreen.hideAsync();
      });
    };

    navigateAndHideSplash();
  }, []);

  return (
    <View className="bg-main_green h-full">
      <SafeAreaView>
        <View className="items-center justify-center h-full">
          <AppText text="Fakye" style="text-2xl font-semibold text-white" />
          <ActivityIndicator color="white" size={30} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CustomSplash;
