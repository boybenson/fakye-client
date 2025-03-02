import React, { useRef } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AuthHeader from "../../common/authHeader";
import AppText from "../../common/Core/AppText";
import { Toast, WarningAlert } from "../../common/Core/Alerts";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../layouts/authlayout";
import PhoneInput from "react-native-phone-number-input";
import { SignInContent } from "../../__types__/graphql";
import { useForm, Controller } from "react-hook-form";
import useSignIn from "../../hooks/use-signin";
import ErrorMessage from "../../common/Core/ErrorMessage";
import useAuthStore from "../../zustand/auth-store";
// 1234
const SignIn = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const phoneInput = useRef<PhoneInput>(null);
  const setAuthToken = useAuthStore((state) => state.setAuthToken);
  const setUser = useAuthStore((state) => state.setUser);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<SignInContent>();

  const typedPhone = watch("phone");

  const { signIn, loading } = useSignIn();

  const onSubmit = (data: SignInContent) => {
    signIn({
      variables: {
        content: {
          phone: data?.phone.slice(1),
        },
      },
      onCompleted: (res) => {
        if (res.signIn) {
          setUser(res?.signIn?.user);
          setAuthToken(res?.signIn?.accessToken);
          return navigation.navigate("Otp", {
            phone: res?.signIn?.user?.phone ?? "",
          });
        }
        return Toast({ type: "error", message: "An error occured" });
      },
      onError: (err) => {
        return Toast({ type: "error", message: err?.message });
      },
    });
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-[96%] mx-auto h-full justify-between">
        <View className="mt-4">
          <AuthHeader title="Sign in to your account" icon={<View />} />
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
              <AppText
                text="Phone Number"
                style="text-main_black text-lg font-semibold"
              />
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={() => (
                  <PhoneInput
                    ref={phoneInput}
                    defaultValue={typedPhone}
                    defaultCode="GH"
                    layout="first"
                    onChangeText={(text) => {
                      setValue("phone", text);
                      trigger("phone");
                    }}
                    onChangeFormattedText={(text) => {
                      setValue("phone", text);
                      trigger("phone");
                    }}
                    autoFocus
                    containerStyle={{
                      width: "100%",
                      borderWidth: 1,
                      borderColor: "#D1D5DB",
                      borderRadius: 8,
                      paddingVertical: 8,
                      marginTop: 6,
                    }}
                    textContainerStyle={{
                      backgroundColor: "transparent",
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      paddingVertical: 0,
                    }}
                    textInputStyle={{
                      fontSize: 16,
                    }}
                    placeholder="546949655"
                    textInputProps={{
                      returnKeyType: "done",
                    }}
                  />
                )}
                name="phone"
              />
            </View>
            {errors.phone && <ErrorMessage text="Phone number is required" />}
          </View>

          <View className="mt-6 p-2">
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              className="bg-main_green p-3 rounded-xl"
            >
              {loading ? (
                <ActivityIndicator size={30} color="white" />
              ) : (
                <AppText
                  text="Sign In"
                  style="text-center text-white font-semibold text-base"
                />
              )}
            </TouchableOpacity>
          </View>

          <View className="px-2 my-2">
            <Text className="text-sm text-main_gray/95 flex flex-row items-center">
              <TouchableOpacity>
                <Text>Don't have an account? </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
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
