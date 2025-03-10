import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { CreateCommentContent, Post } from "../../../__types__/graphql";
import { useForm, Controller } from "react-hook-form";
import useCreateComment from "../../../hooks/use-create-comment";
import useAuthStore from "../../../zustand/auth-store";
import { Toast } from "../../../common/Core/Alerts";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

type Iprops = {
  post: Post | null;
  bottomSheetRef: React.RefObject<BottomSheetModal>;
};

const NewCommentForm = ({ post, bottomSheetRef }: Iprops) => {
  const { control, handleSubmit, reset } = useForm<CreateCommentContent>();
  const user = useAuthStore((state) => state.user);
  const { createComment, loading } = useCreateComment();

  const onSubmit = (data: CreateCommentContent) => {
    createComment({
      variables: {
        content: {
          message: data?.message,
          userId: user?.id ?? "",
          postId: post?.id,
        },
      },
      onCompleted: (res) => {
        if (res.createComment) {
          return reset();
        }
        return Toast({ type: "error", message: "Error Creating comments" });
      },
      onError: (err) => {
        return Toast({ type: "error", message: err?.message });
      },
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="w-full pb-10">
        <View className="border-b border-gray-500/30 mt-1" />
        <View className="flex flex-row mx-auto w-[95%] space-x-2 mt-3">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="border border-[#6B7280] flex-1 rounded-3xl p-0.5 px-2"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ?? ""}
              />
            )}
            name="message"
          />

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className="bg-main_green rounded-full p-0.5 flex items-center justify-center"
          >
            {loading ? (
              <ActivityIndicator color="white" size={30} />
            ) : (
              <Image
                source={require("../../../assets/images/send.png")}
                className="h-10 w-10 rounded-full"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewCommentForm;
