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
        <View></View>
      </View>
    </View>
  );
};

export default Home;
