import React from "react";
import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import AuthHeader from "../../common/authHeader";
import { XMarkIcon } from "react-native-heroicons/solid";
import AppText from "../../common/Core/AppText";

const Otp = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-[98%] mx-auto h-full justify-between">
        <View>
          <AuthHeader
            title="Enter Code"
            icon={
              <TouchableOpacity>
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
              <AppText text="Phone Number" />
              <TextInput
                keyboardType="decimal-pad"
                maxLength={10}
                returnKeyType="done"
                className="p-4 w-full border border-main_gray/50 rounded-md mt-1.5"
                placeholder="0546949655"
              />
            </View>
          </View>

          <View className="mt-3 p-2">
            <TouchableOpacity className="bg-main_green p-3 rounded-xl">
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
