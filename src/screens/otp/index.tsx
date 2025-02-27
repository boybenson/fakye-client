import React from "react";
import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import AuthHeader from "../../common/authHeader";
import { XMarkIcon } from "react-native-heroicons/solid";
import AppText from "../../common/Core/AppText";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import OtpBox from "../../common/Core/OtpBox";
import { RootStackParamList } from "../../navigation/root";

const Otp = () => {
  const rootNavigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-[98%] mx-auto h-full justify-between">
        <View>
          <AuthHeader
            title="Enter Code"
            icon={
              <TouchableOpacity onPress={() => rootNavigation.goBack()}>
                <XMarkIcon size={30} color={"#1A0E00"} />
              </TouchableOpacity>
            }
          />
          <View className="mt-5 p-2 justify-center flex flex-row">
            <View>
              <AppText
                style="text-main_gray font-normal text-sm leading-6 text-center"
                text="OTP code sent to"
              />
              <AppText
                style="text-main_gray font-normal text-sm leading-6 text-center"
                text="+233546949655"
              />
            </View>
          </View>

          <View className="p-2">
            <View className="mt-4">
              <View className="flex flex-row justify-center">
                <OtpBox />
              </View>
            </View>
          </View>

          <View className="mt-3 p-2">
            <TouchableOpacity
              onPress={() =>
                rootNavigation.reset({
                  index: 0,
                  routes: [{ name: "App" }],
                })
              }
              className="bg-main_green p-3 rounded-xl"
            >
              <AppText
                text="Verify"
                style="text-center text-white font-semibold text-base"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
