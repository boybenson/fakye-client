import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";

type Iprops = {
  text: string;
};

export const WarningAlert = ({ text }: Iprops) => {
  return (
    <View className="p-3.5 rounded-lg bg-[#FFFBEB] border border-[#F59E0B]">
      <AppText text={text} style="text-[#F59E0B]" />
    </View>
  );
};
