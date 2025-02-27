import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Cog8ToothIcon } from "react-native-heroicons/outline";
import AppText from "../../common/Core/AppText";

const Home = () => {
  return (
    <View>
      <SafeAreaView className="bg-white">
        <View className="bg-white w-[96%] mx-auto flex flex-row items-center justify-between py-2">
          <Image
            source={require("../../../assets/images/pp.jpeg")}
            style={{ width: 32, height: 32, borderRadius: "100%" }}
          />
          <AppText
            style="text-main_black text-lg font-semibold text-main_green"
            text="Fakye"
          />
          <TouchableOpacity>
            <Cog8ToothIcon size={30} color={"#1A0E00"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View>
        <View className="w-[96%] mx-auto">
          <View className="border border-gray-400 mt-3 rounded-lg p-2">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center">
                <Image
                  source={require("../../../assets/images/pp.jpeg")}
                  style={{ width: 32, height: 32, borderRadius: "100%" }}
                />
                <AppText text="Humble" style="text-sm ml-2" />
              </View>
              <AppText text="5min ago" style="text-xs text-main_gray" />
            </View>
            <View className="mt-2">
              <AppText
                text="The description of the item you want to dash for free goes here and can be long to occupy three lines"
                style="text-xs text-main_gray"
              />
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
