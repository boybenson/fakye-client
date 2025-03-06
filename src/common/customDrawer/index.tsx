import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import useAuthStore from "../../zustand/auth-store";
import AppText from "../Core/AppText";
import { drawerLinks } from "../../constants";
import {
  ArrowLeftStartOnRectangleIcon,
  UsersIcon,
} from "react-native-heroicons/outline";
import useLogout from "../../hooks/use-logout";

const CustomDrawerContent = (props: any) => {
  const user = useAuthStore((state) => state.user);
  const navigation: any = props?.navigation;

  const { logout } = useLogout();

  const handleLogout = () => {
    return logout();
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex justify-between h-full flex-1">
        <View>
          <Image
            source={require("../../../assets/images/pp.jpeg")}
            className="h-16 w-16 rounded-full"
          />
          <View className="mt-1">
            <AppText
              text={user?.fullName ?? ""}
              style="text-xl font-normal text-gray-800"
            />
            <AppText
              text={user?.phone ?? ""}
              style="text-sm font-normal text-gray-600"
            />
          </View>
          <View className="h-[2px] w-[100%] border-t border-[#DADADD] mt-3" />
          {drawerLinks?.map((link, idx: number) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(link.link)}
                key={idx}
                className="flex flex-row items-center space-x-3 my-4"
              >
                <View className="mr-2">{link.icon}</View>
                <AppText text={link.label} style="text-2xl font-normal" />
              </TouchableOpacity>
            );
          })}
          <View className="h-[2px] w-[100%] border-t border-[#DADADD] mt-3" />
          <TouchableOpacity className="flex flex-row items-center space-x-3 my-4">
            <View className="mr-2">
              <UsersIcon color={"#6B7280"} size={25} />
            </View>
            <AppText text="Become a partner" style="text-2xl font-normal" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => handleLogout()}
            className="flex flex-row items-center justify-center space-x-2 my-4 bg-main_red p-2.5 rounded-xl"
          >
            <View>
              <ArrowLeftStartOnRectangleIcon color={"#ffffff"} size={25} />
            </View>
            <Text className="text-white text-xl font-normal">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
