import { Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";

type Iprops = {
  text?: string;
};

const ErrorMessage = ({ text }: Iprops) => {
  return (
    <View>
      <AppText
        text={text ?? "This field is required"}
        style="text-red-600 py-1 text-sm"
      />
    </View>
  );
};

export default ErrorMessage;
