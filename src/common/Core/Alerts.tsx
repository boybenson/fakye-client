import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { toast, ToastPosition } from "@backpackapp-io/react-native-toast";

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

export const Toast = ({
  type,
  message,
}: {
  type: "sucess" | "error";
  message: string;
}) => {
  if (type === "error") {
    return toast.error(`${message}`, {
      // position: ToastPosition.BOTTOM,
    });
  }

  if (type === "sucess") {
    return toast.success(`${message}`, {
      position: ToastPosition.BOTTOM,
    });
  }
};
