import { Text } from "react-native";
import React from "react";

type Iprops = {
  style?: string;
  text?: string;
};

const AppText = ({ text, style }: Iprops) => {
  return (
    <>
      <Text className={style}>{text}</Text>
    </>
  );
};

export default AppText;
