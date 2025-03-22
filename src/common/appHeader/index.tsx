import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../Core/AppText";
import { Cog8ToothIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

type Iprops = {
  title?: string;
};

const AppHeader = ({ title }: Iprops) => {
  const navigation: any = useNavigation();

  return (
    <View className="bg-white w-[96%] mx-auto flex-row items-center justify-between py-2">
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={require("../../../assets/images/pp.jpeg")}
          style={{ width: 32, height: 32, borderRadius: 100 }}
        />
      </TouchableOpacity>
      <AppText
        style="text-main_black text-lg font-semibold text-main_green"
        text={title ?? "Fakye"}
      />
      <TouchableOpacity>
        <Cog8ToothIcon size={30} color={"#1A0E00"} />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
