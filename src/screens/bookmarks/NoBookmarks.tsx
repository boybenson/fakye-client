import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "../../common/Core/AppText";

const NoBookmarks = () => {
  return (
    <View className="flex flex-row items-center w-full justify-center h-full">
      <View className="items-center">
        <Image
          source={require("../../assets/images/bookmark.png")}
          className="h-32 w-32"
        />
        <AppText text="You have not bookmarked any item yet." />
        <View>
          <TouchableOpacity className="border border-main_green p-2.5 rounded-xl mt-2">
            <AppText text="Go to Home" style="text-main_green" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NoBookmarks;
