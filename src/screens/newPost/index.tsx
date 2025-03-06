import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
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
import {
  CameraIcon,
  ChevronDownIcon,
  PhotoIcon,
} from "react-native-heroicons/outline";
import * as ImagePicker from "expo-image-picker";
import { DropdownMenu, MenuOption } from "../../common/Core/DropDown";
import { useForm, Controller } from "react-hook-form";
import { CreatePostContent, PostType } from "../../__types__/graphql";

const NewPost = () => {
  const [visible, setVisible] = useState(false);
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<TextInput>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<CreatePostContent>();

  const postType = watch("type");

  return (
    <View className="flex-1 bg-white">
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
              <TouchableOpacity className="bg-main_green rounded-3xl p-2.5 px-6">
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
                  <View className="my-2">
                    <DropdownMenu
                      visible={visible}
                      handleOpen={() => setVisible(true)}
                      handleClose={() => setVisible(false)}
                      trigger={
                        <View className="flex flex-row justify-start">
                          <TouchableOpacity
                            onPress={() => setVisible(!visible)}
                            className="border border-main_green p-1.5 rounded-xl flex flex-row items-center"
                          >
                            <AppText
                              text={`${
                                postType === PostType.Giveaway
                                  ? "Giveaway"
                                  : postType === PostType.Request
                                  ? "Request"
                                  : "Select a tag"
                              }`}
                              style="text-main_green"
                            />
                            <ChevronDownIcon color={"#08A045"} size={20} />
                          </TouchableOpacity>
                        </View>
                      }
                    >
                      <MenuOption
                        onSelect={() => {
                          setValue("type", PostType.Giveaway);
                          setVisible(false);
                        }}
                      >
                        <Text>Giveaway</Text>
                      </MenuOption>
                      <MenuOption
                        onSelect={() => {
                          setValue("type", PostType.Request);
                          setVisible(false);
                        }}
                      >
                        <Text>Request</Text>
                      </MenuOption>
                    </DropdownMenu>
                  </View>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="The description of the item you want to dash for free goes here and can be long to occupy three lines"
                        multiline
                        className="w-full placeholder:text-gray-800"
                        ref={inputRef}
                        autoFocus
                      />
                    )}
                    name="description"
                  />

                  <View className="mt-2">
                    <AppText text="Item name*" style="text-main_gray" />
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                          className="p-2.5 border border-main_gray rounded-xl mt-1"
                          placeholder="eg. Nike shoes, size 35"
                        />
                      )}
                      name="name"
                    />
                  </View>

                  <View className="mt-2 p-2 rounded-lg flex flex-row items-center space-x-2">
                    <Checkbox
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? "#08A045" : undefined}
                    />
                    <View>
                      <AppText text="Show my location" style="text-main_gray" />
                    </View>
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
