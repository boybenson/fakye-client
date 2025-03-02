import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AuthHeader from "../../common/authHeader";
import { XMarkIcon } from "react-native-heroicons/solid";
import AppText from "../../common/Core/AppText";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import OtpBox from "../../common/Core/OtpBox";
import { RootStackParamList } from "../../navigation/root";
import useVerifyOtp from "../../hooks/use-verify-otp";
import { Toast } from "../../common/Core/Alerts";

const Otp = ({ route }: any) => {
  const { verifyOtp, loading } = useVerifyOtp();
  const rootNavigation = useNavigation<NavigationProp<RootStackParamList>>();
  const phone = route?.params?.phone;
  const [otpValue, setOtpValue] = useState<any>([]);

  const handleOtpComplete = (otp: string) => {
    setOtpValue(otp);
  };

  const onSubmit = () => {
    verifyOtp({
      variables: {
        content: {
          phone,
          otpCode: otpValue,
        },
      },
      onCompleted: () => {
        return rootNavigation.reset({
          index: 0,
          routes: [{ name: "App" }],
        });
      },
      onError: (err) => {
        return Toast({ type: "error", message: err?.message });
      },
    });
  };

  const disableButton = otpValue?.length < 4;

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-[98%] mx-auto h-full justify-between mt-4">
        <View>
          <AuthHeader
            title="Enter Code"
            icon={
              <TouchableOpacity
                disabled={loading}
                onPress={() => rootNavigation.goBack()}
              >
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
                text={phone}
              />
            </View>
          </View>

          <View className="p-2">
            <View className="mt-4">
              <View className="flex items-center justify-center">
                <OtpBox onComplete={handleOtpComplete} />
              </View>
            </View>
          </View>

          <View className="mt-3 p-2">
            <TouchableOpacity
              onPress={onSubmit}
              disabled={disableButton || loading}
              className={`${
                disableButton ? "bg-main_gray/40" : "bg-main_green"
              }  p-3 rounded-xl`}
            >
              {loading ? (
                <ActivityIndicator size={20} color="white" />
              ) : (
                <AppText
                  text="Verify"
                  style="text-center text-white font-semibold text-base"
                />
              )}
            </TouchableOpacity>
          </View>
          <View className="px-2 my-2">
            <Text className="text-sm text-main_gray/95 flex flex-row items-center">
              <TouchableOpacity>
                <Text>Haven't received OTP? </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-main_dark underline">Resend</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
