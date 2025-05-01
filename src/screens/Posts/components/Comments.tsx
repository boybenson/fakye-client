import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import AppText from "../../../common/Core/AppText";
import useFetchComments from "../../../hooks/use-fetch-comments";
import { calculateTimeAgo } from "../../../helpers";
import NewCommentForm from "./NewCommentForm";

type Iprops = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  post: any | null;
};

const Comments = ({ bottomSheetRef, post }: Iprops) => {
  const { comments, isPending } = useFetchComments(post?.id);
  const handleCloseComments = () => {
    bottomSheetRef?.current?.dismiss();
  };

  return (
    <>
      <View className="flex-1 justify-between">
        <View className="">
          <View className="flex flex-row items-centers justify-between mx-auto w-[95%] space-x-2 mt-3">
            <View />
            <View>
              <AppText
                text={`${comments?.length ?? 0} Comments`}
                style="text-main_gray font-semibold text-lg"
              />
            </View>
            <TouchableOpacity onPress={() => handleCloseComments()}>
              <XMarkIcon color="#6B7280" size={30} />
            </TouchableOpacity>
          </View>
          <View className="border-b border-gray-500/30 mt-1" />
        </View>
        <View className="flex-1">
          <BottomSheetScrollView>
            {isPending && (
              <>
                <View className="mt-4">
                  <ActivityIndicator />
                  <AppText
                    text="Loading Comments..."
                    style="text-center my-2 font-normal text-lg text-main_gray"
                  />
                </View>
              </>
            )}
            {!isPending && comments?.length < 1 && (
              <>
                <View>
                  <AppText
                    text="No comments..."
                    style="text-center my-2 font-normal text-lg text-main_gray"
                  />
                </View>
              </>
            )}
            {!isPending &&
              comments?.length > 0 &&
              comments?.map((comment, idx) => {
                return (
                  <View key={idx} className="mt-3 w-full">
                    <View className="w-[96%] mx-auto">
                      <View className="flex flex-row items-end space-x-4">
                        <View />
                        <View className="bg-[#F5F6F9] p-4 rounded-lg flex-1">
                          <View className="pb-3 flex flex-row items-center justify-between">
                            <Text className="font-semibold text-sm">
                              {comment?.user?.Name}
                            </Text>
                            <Text className="font-normal text-xs text-[#171C1B]">
                              {calculateTimeAgo(comment?.createdAt)}
                            </Text>
                          </View>
                          <View>
                            <Text className="text-[#171C1B]">
                              {comment?.message}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
          </BottomSheetScrollView>
        </View>
        <NewCommentForm post={post} bottomSheetRef={bottomSheetRef} />
      </View>
    </>
  );
};

export default Comments;
