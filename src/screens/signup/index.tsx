import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AuthHeader from "../../common/authHeader";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import AppText from "../../common/Core/AppText";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-[96%] mx-auto h-full justify-between">
        <View>
          <AuthHeader
            title="Create Account"
            icon={
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ChevronLeftIcon size={30} color={"#1A0E00"} />
              </TouchableOpacity>
            }
          />
          <View className="mt-5 p-2">
            <AppText
              style="text-main_black text-xl font-bold"
              text="Let’s get started"
            />
            <AppText
              style="text-main_gray font-normal text-sm leading-6"
              text="Hey there! sign up to start using Fakye"
            />
          </View>

          <View className="p-2">
            <View>
              <AppText text="Full Name" />
              <TextInput
                returnKeyType="next"
                className="p-4 w-full border border-main_gray/50 rounded-md mt-1.5"
                placeholder="Enter your name"
              />
            </View>
            <View className="mt-6">
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

          <View className="p-2">
            <Text className="text-center text-xs text-main_gray/95">
              By continuing you agree to our{" "}
              <Text className="text-main_dark underline">
                Terms & conditions
              </Text>{" "}
              and our{" "}
              <Text className="text-main_dark underline">Privacy policy</Text>
            </Text>
          </View>
        </View>

        <View className="p-2">
          <TouchableOpacity className="bg-main_green p-3 rounded-xl">
            <AppText
              text="Create Account"
              style="text-center text-white font-semibold text-base"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
