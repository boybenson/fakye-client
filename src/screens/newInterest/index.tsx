import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import AuthHeader from "../../common/authHeader";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import AppText from "../../common/Core/AppText";
import { useNavigation } from "@react-navigation/native";

const NewInterest = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white">
      <View className="w-[96%] mx-auto h-full justify-between">
        <View>
          <View className="mt-4">
            <AuthHeader
              icon={
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <ChevronLeftIcon size={25} color="#6B7280" />
                </TouchableOpacity>
              }
              title="I am interested"
            />
          </View>
          <View className="mt-4">
            <AppText
              text="Message"
              style="text-main_black font-normal text-lg"
            />
            <AppText
              text="Convince the item owner why you want it."
              style="font-normal text-base text-main_gray"
            />
            <TextInput
              className="border border-gray-500 rounded-lg mt-3 p-2"
              multiline
              style={{ minHeight: 150 }}
              placeholder="Why do you want the item?"
            />
          </View>
        </View>
        <View className="mt-4">
          <TouchableOpacity className="bg-main_green justify-center items-center p-2.5 rounded-lg">
            <AppText text="Notify" style="text-white text-lg" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewInterest;
