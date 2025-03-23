import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
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
import { ChevronDownIcon, XCircleIcon } from "react-native-heroicons/outline";
import * as ImagePicker from "expo-image-picker";
import { DropdownMenu, MenuOption } from "../../common/Core/DropDown";
import { useForm, Controller } from "react-hook-form";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { CreatePostContent, PostType } from "../../__types__/graphql";
import useCreatePost from "../../hooks/use-create-post";
import useAuthStore from "../../zustand/auth-store";
import { Toast } from "../../common/Core/Alerts";
import { firebasesStorage } from "../../firebase";
import { tabScreens } from "../../constants";

const NewPost = () => {
  const user = useAuthStore((state) => state.user);
  const [uploading, setUploading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const headerHeight = useHeaderHeight();
  const navigation: any = useNavigation();
  const [isChecked, setChecked] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const { control, handleSubmit, setValue, watch, trigger } =
    useForm<CreatePostContent>();

  const { createPost, loading } = useCreatePost();

  const postType = watch("type");
  const name = watch("name");
  const description = watch("description");

  const notCompleted = !name || !description || !postType;

  const pickImage = async () => {
    if (images.length >= 4) {
      return Toast({
        type: "error",
        message: "You can only upload up to 4 images",
      });
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const newImages = result.assets
        .slice(0, 4 - images.length)
        .map((asset) => asset.uri);
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const removeImage = (uri: string) => {
    setImages((prev) => prev.filter((image) => image !== uri));
  };

  const uploadImagesToFirebase = async () => {
    setUploading(true);
    try {
      const urls = await Promise.all(
        images.map(async (image) => {
          const response = await fetch(image);
          const blob = await response.blob();
          const filename = image.substring(image.lastIndexOf("/") + 1);
          const storageRef = ref(firebasesStorage, `posts/${filename}`);
          const uploadTask = uploadBytesResumable(storageRef, blob);

          return new Promise<string>((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              null,
              (error) => reject(error),
              async () => {
                const downloadURL = await getDownloadURL(
                  uploadTask.snapshot.ref
                );
                resolve(downloadURL);
              }
            );
          });
        })
      );
      return urls;
    } catch (error) {
      console.error("Error uploading images:", error);
      Toast({ type: "error", message: "Image upload failed" });
      return [];
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data?: CreatePostContent) => {
    if (notCompleted) {
      return Toast({
        type: "error",
        message: "Please fill in all required fields",
      });
    }

    const uploadedUrls = await uploadImagesToFirebase();
    if (uploadedUrls.length === 0) return;

    createPost({
      variables: {
        content: {
          name: data?.name ?? "",
          description: data?.description ?? "",
          type: data?.type,
          userId: user?.id,
          media: uploadedUrls ?? [],
          showLocation: isChecked,
        },
      },
      onCompleted: (res) => {
        if (res) {
          Toast({
            type: "sucess",
            message: "Post created successfully",
          });
          return navigation.navigate(tabScreens.HomeTab);
        }
      },
      onError: (err) => {
        return Toast({ type: "error", message: err?.message });
      },
    });
  };

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
              <TouchableOpacity
                disabled={notCompleted || loading || uploading}
                onPress={handleSubmit(onSubmit)}
                className={`${
                  notCompleted || loading || uploading
                    ? "bg-main_gray/60"
                    : "bg-main_green"
                } rounded-3xl p-1.5 px-6`}
              >
                {loading || uploading ? (
                  <ActivityIndicator size={25} />
                ) : (
                  <AppText text="Post" style="text-white font-semibold" />
                )}
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
                    // rules={{
                    //   required: true,
                    // }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Describe the item"
                        multiline
                        className="w-full placeholder:text-gray-800"
                        ref={inputRef}
                        autoFocus
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value ?? ""}
                      />
                    )}
                    name="description"
                  />

                  <View className="mt-10">
                    <View className="flex flex-row items-center">
                      <AppText text="Item name" style="text-main_gray" />
                      <AppText text="*" style="text-red-400" />
                    </View>
                    <Controller
                      control={control}
                      // rules={{
                      //   required: true,
                      // }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                          className="p-2.5 border border-main_gray rounded-lg mt-1"
                          placeholder="eg. Nike shoes, size 35"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value ?? ""}
                        />
                      )}
                      name="name"
                    />
                  </View>

                  <View className="mt-6">
                    <View className="flex flex-row items-center">
                      <AppText text="Add images" style="text-main_gray" />
                      <AppText text="*" style="text-red-400" />
                    </View>

                    <View>
                      {images?.length <= 0 ? (
                        <View className="mt-1 flex flex-row items-center space-x-3">
                          <TouchableOpacity
                            onPress={pickImage}
                            className="h-24 w-24 border border-dotted rounded-lg justify-center items-center border-gray-400"
                          >
                            <Image
                              source={require("../../assets/images/camera.png")}
                              className="w-10 h-10"
                            />
                          </TouchableOpacity>
                          <View>
                            <Text>Add up to 4 images</Text>
                          </View>
                        </View>
                      ) : (
                        <View className="flex flex-row space-x-3 mt-4">
                          <ScrollView horizontal>
                            {images?.map((uri) => (
                              <View key={uri} className="relative mx-1">
                                <Image
                                  source={{ uri }}
                                  className="h-24 w-24 rounded-sm"
                                />
                                <TouchableOpacity
                                  onPress={() => removeImage(uri)}
                                  className="absolute -top-2 -right-2"
                                >
                                  <XCircleIcon color="red" size={24} />
                                </TouchableOpacity>
                              </View>
                            ))}
                          </ScrollView>
                        </View>
                      )}
                    </View>
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
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default NewPost;
