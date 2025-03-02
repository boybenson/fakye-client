import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import AppText from "../../common/Core/AppText";

const Search = () => {
  return (
    <SafeAreaView>
      <View className="w-[96%] mx-auto">
        <AppText text="Search" style="text-2xl font-semibold" />
      </View>
    </SafeAreaView>
  );
};

export default Search;
