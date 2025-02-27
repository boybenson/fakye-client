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
import { WarningAlert } from "../../common/Core/Alerts";
import { useNavigation } from "@react-navigation/native";
import { authScreens } from "../../constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../layouts/authlayout";

const SignIn = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-[98%] mx-auto h-full justify-between">
        <View>
          <AuthHeader
            title="Sign in to your account"
            icon={
              <TouchableOpacity>
                <ChevronLeftIcon size={30} color={"#1A0E00"} />
              </TouchableOpacity>
            }
          />
          <View className="mt-5 p-2">
            <AppText
              style="text-main_black text-xl font-bold"
              text="Welcome back 👋"
            />
            <AppText
              style="text-main_gray font-normal text-sm leading-6"
              text="Please enter your phone number to continue"
            />
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

          <View className="mt-6 p-2">
            <TouchableOpacity className="bg-main_green p-3 rounded-xl">
              <AppText
                text="Sign In"
                style="text-center text-white font-semibold text-base"
              />
            </TouchableOpacity>
          </View>

          <View className="px-2">
            <Text className="text-sm text-main_gray/95 flex flex-row items-center">
              <TouchableOpacity>
                <Text>Don't have an account? </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate(authScreens.SignUp)}
              >
                <Text className="text-main_dark underline">SignUp</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <View className="p-2 mt-3">
            <WarningAlert text="Kindly note that this phone number will be used to verify your account." />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
