import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../../common/Core/AppText";
import { useNavigation } from "@react-navigation/native";

const NewPost = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <View className="w-[96%] mx-auto mt-4">
          <View className="flex flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="rounded-xl p-2.5 pr-6"
            >
              <AppText text="Cancel" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-main_green rounded-xl p-2.5 px-6">
              <AppText text="Post" style="text-white font-semibold" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NewPost;
