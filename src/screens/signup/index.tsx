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

const SignUp = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-[98%] mx-auto h-full justify-between">
        <View>
          <AuthHeader
            title="Create Account"
            icon={
              <TouchableOpacity>
                <ChevronLeftIcon size={30} color={"#1A0E00"} />
              </TouchableOpacity>
            }
          />
          <View className="mt-5 p-2">
            <Text className="text-main_black text-xl font-bold">
              Let’s get started
            </Text>
            <Text className="text-main_gray font-normal text-sm leading-6">
              Hey there! sign up to start using Fakye
            </Text>
          </View>

          <View className="p-2">
            <View>
              <Text>Full Name</Text>
              <TextInput
                returnKeyType="next"
                className="p-4 w-full border border-main_gray/50 rounded-md mt-1.5"
                placeholder="Enter your name"
              />
            </View>
            <View className="mt-6">
              <Text>Phone Number</Text>
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
            <Text className="text-center text-white font-semibold text-base">
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
