import {
  FlatList,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppHeader from "../../common/appHeader";
import AppText from "../../common/Core/AppText";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../layouts/applayout";

const Chats = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  return (
    <View>
      <SafeAreaView className="bg-white h-full">
        <View className="w-[96%] mx-auto flex-1">
          <View>
            <AppHeader title="Chats" />
            <TextInput
              className="border border-main_gray/25 p-3 rounded-full mt-3"
              placeholder="Search..."
            />
          </View>

          <View className="mt-3 flex-1">
            <FlatList
              data={[1, 2, 3, 4, 5]}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Chat")}
                    className="flex flex-row space-x-2 items-center mt-5"
                  >
                    <Image
                      source={require("../../../assets/images/pp.jpeg")}
                      className="h-10 w-10 rounded-full"
                    />
                    <View className="flex-1">
                      <View className="flex flex-row items-center justify-between">
                        <AppText
                          text="Humble"
                          style="text-[16px] text-[#0C0C0C]"
                        />
                        <AppText
                          text="yesterday"
                          style="text-sm text-[#767781]"
                        />
                      </View>
                      <View className="mt-1">
                        <AppText
                          style="text-[#767781]"
                          text="Lorem ipsum dolor sit amet consectetur. Libero elit vel lacus montes. Maecemagna non..."
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Chats;
