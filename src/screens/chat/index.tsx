import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import AppText from "../../common/Core/AppText";
import { useNavigation } from "@react-navigation/native";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-white flex-1">
      <SafeAreaView>
        <View className="flex flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={30} color={"#6B7280"} />
          </TouchableOpacity>
          <View>
            <View className="items-center justify-center">
              <Image
                source={require("../../../assets/images/pp.jpeg")}
                className="h-10 w-10 rounded-full"
              />
              <AppText text="Humble" />
            </View>
          </View>
          <View />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Chat;
