import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ChatBubbleLeftIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import AppText from "../../common/Core/AppText";
import { Post, PostType } from "../../__types__/graphql";
import { calculateTimeAgo } from "../../helpers";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Sheet from "../../common/sheet";
import Comments from "./components/Comments";
import BookmarkBtn from "./components/BookMarkBtn";
import { useNavigation } from "@react-navigation/native";
import ImagesGrid from "./components/ImagesGrid";

type Iprops = {
  posts: any;
};

const Posts = ({ posts }: Iprops) => {
  const navigation: any = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleOpenComments = () => {
    bottomSheetRef?.current?.present();
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={posts ?? []}
        renderItem={({ item }) => {
          return (
            <View className="border border-gray-300 mt-3 rounded-lg p-4 bg-white">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Image
                    source={require("../../../assets/images/pp.jpeg")}
                    style={{ width: 32, height: 32, borderRadius: 100 }}
                  />
                  <AppText
                    text={item?.user?.fullName ?? ""}
                    style="text-sm ml-2"
                  />
                </View>
                <TouchableOpacity>
                  <EllipsisHorizontalIcon size={30} color={"#6B7280"} />
                </TouchableOpacity>
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
                  <View className="flex flex-row items-center">
                    <MapPinIcon size={20} color={"#6B7280"} />
                    <AppText
                      text="Legon"
                      style="text-main_gray p-1 rounded-xl"
                    />
                  </View>
                  <View className="flex flex-row items-center">
                    <ClockIcon size={20} color={"#6B7280"} />
                    <AppText
                      text={calculateTimeAgo(item?.createdAt)}
                      style="text-main_gray p-1 rounded-2xl"
                    />
                  </View>
                </View>
                <View className="mt-2 border border-main_gray/30 rounded-xl overflow-hidden">
                  <ImagesGrid images={item?.media} />
                </View>
              </View>
              <View>
                <View className="flex-row items-center justify-between mt-3">
                  <View className="flex flex-row items-center space-x-4">
                    <TouchableOpacity
                      onPress={() => handleOpenComments()}
                      className="flex flex-row items-center space-x-1"
                    >
                      <ChatBubbleLeftIcon color={"#6B7280"} />
                      <View>
                        <AppText text="120" />
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
          );
        }}
      />

      <Sheet bottomSheetRef={bottomSheetRef} snapPoints={["55%"]}>
        <Comments />
      </Sheet>
    </>
  );
};

export default Posts;
