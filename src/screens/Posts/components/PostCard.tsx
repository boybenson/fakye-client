import {
  Alert,
  Image,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import AppText from "../../../common/Core/AppText";
import { DropdownMenu, MenuOption } from "../../../common/Core/DropDown";
import {
  ArrowUpTrayIcon,
  ChatBubbleLeftIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
  FlagIcon,
  HeartIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { calculateTimeAgo } from "../../../helpers";
import ImagesGrid from "./ImagesGrid";
import BookmarkBtn from "./BookMarkBtn";
import { useNavigation } from "@react-navigation/native";
import { Post, PostType } from "../../../__types__/graphql";
import Sheet from "../../../common/sheet";
import Comments from "./Comments";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

type Iprops = {
  item?: Post;
};

const PostCard = ({ item }: Iprops) => {
  const navigation: any = useNavigation();
  const [visible, setVisible] = useState(false);

  const [selectedPost, setSelectedPost] = useState<Post | null | undefined>(
    null
  );

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleOpenComments = (post: Post | undefined) => {
    setSelectedPost(post);
    bottomSheetRef?.current?.present();
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Benevo Ghana | Focused on fostering resilient communities where we emphasize sharing and minimizing waste. This approach enables us to support both one another and the environment.",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <>
      <View className="border border-gray-300 mt-3 rounded-lg p-4 bg-white">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image
              source={require("../../../../assets/images/pp.jpeg")}
              style={{ width: 32, height: 32, borderRadius: 100 }}
            />
            <AppText text={item?.user?.fullName ?? ""} style="text-sm ml-2" />
          </View>
          <DropdownMenu
            visible={visible}
            handleOpen={() => setVisible(true)}
            handleClose={() => setVisible(false)}
            position="left"
            trigger={
              <TouchableOpacity onPress={() => setVisible(!visible)}>
                <EllipsisHorizontalIcon size={30} color={"#6B7280"} />
              </TouchableOpacity>
            }
          >
            <MenuOption>
              <TouchableOpacity
                onPress={onShare}
                className="flex flex-row items-center justify-between"
              >
                <AppText text="Share post" />
                <ArrowUpTrayIcon className="w-3 h-3" color="#6B7280" />
              </TouchableOpacity>
            </MenuOption>
            <View className="border-t border-gray-400/25" />
            <MenuOption>
              <TouchableOpacity className="flex flex-row items-center justify-between">
                <AppText text="Report Post" style="text-red-600" />
                <FlagIcon className="w-4 h-4" color={"#dc2626"} />
              </TouchableOpacity>
            </MenuOption>
          </DropdownMenu>
        </View>
        <View className="mt-2">
          <AppText
            text={item?.name ?? ""}
            style="text-lg font-semibold text-main_dark"
          />
          <AppText
            text={item?.description ?? ""}
            style="text-xs text-main_gray"
          />
          <View className="my-2 flex flex-row items-center space-x-3">
            <View>
              <AppText
                text={item?.postType ?? ""}
                style={`${
                  item?.postType === PostType.Giveaway
                    ? "text-main_green border-main_green"
                    : "text-purple-600 border-purple-600"
                } border py-0.5 px-2 rounded-xl`}
              />
            </View>

            {item?.showLocation && (
              <View className="flex flex-row items-center">
                <MapPinIcon size={20} color={"#6B7280"} />
                <AppText text="Legon" style="text-main_gray p-1 rounded-xl" />
              </View>
            )}

            <View className="flex flex-row items-center">
              <ClockIcon size={20} color={"#6B7280"} />
              <AppText
                text={calculateTimeAgo(item?.createdAt)}
                style="text-main_gray p-1 rounded-2xl"
              />
            </View>
          </View>
          {Array.isArray(item?.media) && item?.media?.length > 0 && (
            <View className="mt-2 border border-main_gray/30 rounded-xl overflow-hidden">
              <ImagesGrid images={item.media} />
            </View>
          )}
        </View>
        <View>
          <View className="flex-row items-center justify-between mt-3">
            <View className="flex flex-row items-center space-x-4">
              <TouchableOpacity
                onPress={() => handleOpenComments(item)}
                className="flex flex-row items-center space-x-1"
              >
                <ChatBubbleLeftIcon color={"#6B7280"} />
                <View>
                  <AppText text={item?.commentCount ?? ""} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center space-x-1">
                <HeartIcon color={"#6B7280"} />
                <View>
                  <AppText text="100" />
                </View>
              </TouchableOpacity>
              <BookmarkBtn postId={item?.id ?? ""} />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("NewInterest")}
                className="bg-main_green p-3 rounded-lg"
              >
                <AppText
                  text="I am Interested"
                  style="text-white font-semibold"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Sheet bottomSheetRef={bottomSheetRef} snapPoints={["55%"]}>
        <Comments bottomSheetRef={bottomSheetRef} post={selectedPost ?? null} />
      </Sheet>
    </>
  );
};

export default PostCard;
