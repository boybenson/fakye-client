import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../../common/Core/AppText";

const Welcome = () => {
  return (
    <View className="h-full">
      <View className="flex-1 relative">
        <Image
          source={require("../../assets/images/intro.png")}
          className="w-full h-full absolute -top-32 right-0"
          resizeMode="cover"
        />
      </View>

      <View className="flex-1 py-3">
        <View className="mt-6 p-2">
          <AppText
            style="text-main_black text-2xl font-semibold"
            text="Welcome to Fakye 👋"
          />
          <AppText
            style="text-main_black text-4xl font-bold"
            text="Share it freely and brighten someone's day."
          />
          <AppText
            style="text-main_gray text-sm font-normal py-3 leading-5"
            text="Fakye is focused on fostering resilient communities where we emphasize sharing and minimizing waste. This approach enables us to support both one another and the environment."
          />
          <AppText
            style="text-main_green text-lg font-normal"
            text="Excited to join?"
          />
        </View>
        <View className="mt-6 p-2">
          <TouchableOpacity className="bg-main_green p-3 rounded-xl">
            <AppText
              text="Let's go!!"
              style="text-center text-white font-semibold text-base"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
