import { TextInput, View } from "react-native";
import React from "react";

const OtpBox = () => {
  return (
    <View className="flex flex-row space-x-2">
      {[1, 2, 3, 4]?.map((item, idx) => {
        return (
          <TextInput
            key={idx}
            maxLength={1}
            keyboardType="number-pad"
            returnKeyType="next"
            className="border border-main_gray/50 rounded-md mt-1.5 h-12 w-12 font-bold text-lg text-center"
          />
        );
      })}
    </View>
  );
};

export default OtpBox;
