import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import AppText from "../../common/Core/AppText";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import { useHeaderHeight } from "@react-navigation/elements";
import { CameraIcon, PhotoIcon } from "react-native-heroicons/outline";
import * as ImagePicker from "expo-image-picker";

const NewPost = () => {
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<TextInput>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      // allowsEditing: true,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 justify-between">
        <KeyboardAvoidingView
          keyboardVerticalOffset={headerHeight}
          style={{
            flex: 1,
            alignContent: "space-between",
          }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View className="w-[96%] mx-auto mt-4 flex-1">
            <View className="flex flex-row items-center justify-between">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="rounded-xl p-2.5 pr-6"
              >
                <AppText text="Cancel" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-main_green rounded-xl p-2.5 px-6">
                <AppText text="Post" style="text-white font-semibold" />
              </TouchableOpacity>
            </View>

            <View className="mt-4">
              <View className="flex flex-row space-x-4">
                <View>
                  <Image
                    source={require("../../../assets/images/pp.jpeg")}
                    className="h-12 w-12 rounded-full"
                  />
                </View>
                <View className="flex-1">
                  <TextInput
                    placeholder="The description of the item you want to dash for free goes here and can be long to occupy three lines"
                    multiline
                    className="w-full placeholder:text-gray-800"
                    ref={inputRef}
                    autoFocus
                  />
                  <View className="mt-2 border border-main_gray/60 p-2 rounded-lg flex flex-row items-center justify-between">
                    <AppText text="Show my location" style="text-main_gray" />
                    <Checkbox
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? "#08A045" : undefined}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="bg-white p-3">
            <View className="w-[96%] mx-auto flex flex-row space-x-8">
              <TouchableOpacity onPress={pickImage}>
                <PhotoIcon color={"#1A0E00"} size={28} />
              </TouchableOpacity>
              <TouchableOpacity>
                <CameraIcon color={"#1A0E00"} size={28} />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default NewPost;
