import React, { useRef } from "react";
import {
  ActivityIndicator,
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
import PhoneInput from "react-native-phone-number-input";
import useSignUp from "../../hooks/use-signup";
import { useForm, Controller } from "react-hook-form";
import { SignUpContent } from "../../__types__/graphql";
import ErrorMessage from "../../common/Core/ErrorMessage";
import { Toast } from "../../common/Core/Alerts";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../layouts/authlayout";

type FormInputs = {
  phone: string;
  name: string;
};

const SignUp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const phoneInput = useRef<PhoneInput>(null);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormInputs>();

  const typedPhone = watch("phone");

  const { signUp, isPending, isSuccess } = useSignUp();

  const onSubmit = (data: FormInputs) => {
    signUp({ phone: data?.phone.slice(1), name: data?.name });
  };

  if (isSuccess) {
    return navigation.navigate("SignIn");
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-[96%] mx-auto h-full justify-between mt-4">
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
              <View>
                <AppText text="Full Name" />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      returnKeyType="next"
                      className="p-4 w-full border border-main_gray/50 rounded-md mt-1.5"
                      placeholder="Enter your name"
                      autoCapitalize="none"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="name"
                />
              </View>
              {errors.name && <ErrorMessage text="Name is required" />}
            </View>
            <View className="mt-6">
              <View>
                <AppText text="Phone Number" />
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
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className="bg-main_green p-3 rounded-xl"
          >
            {isPending ? (
              <ActivityIndicator color="white" size={30} />
            ) : (
              <AppText
                text="Create Account"
                style="text-center text-white font-semibold text-base"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
