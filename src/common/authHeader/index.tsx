import { Text, View } from "react-native";
import React from "react";

type Iprops = {
  icon?: any;
  title?: string;
};

const AuthHeader = ({ icon, title }: Iprops) => {
  return (
    <>
      <View className="flex flex-row items-center justify-between">
        <>{icon}</>
        <Text className="text-main_black text-base">{title}</Text>
        <View />
      </View>
    </>
  );
};

export default AuthHeader;
