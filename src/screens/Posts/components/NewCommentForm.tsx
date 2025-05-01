import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useCreateComment from "../../../hooks/use-create-comment";
import useAuthStore from "../../../zustand/auth-store";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useQueryClient } from "@tanstack/react-query";

type Iprops = {
  post: any | null;
  bottomSheetRef: React.RefObject<BottomSheetModal>;
};

const NewCommentForm = ({ post }: Iprops) => {
  const { control, handleSubmit, reset } = useForm<any>();
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();
  const { createComment, isPending, isSuccess } = useCreateComment();

  const onSubmit = (data: any) => {
    createComment({
      message: data?.message ?? "",
      postId: Number(post?.id),
      userId: Number(user?.ID),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });

      reset();
    }
  }, [isSuccess, reset]);

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
            {isPending ? (
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
