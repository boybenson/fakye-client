import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  BookmarkIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import AppText from "../../common/Core/AppText";
import { ChatBubbleLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import ImagesGrid from "./ImagesGrid";
import Sheet from "../../common/sheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import AppHeader from "../../common/appHeader";
import useFetchPosts from "../../hooks/use-fetch-posts";
import { PostType } from "../../__types__/graphql";
import Comments from "../Posts/components/Comments";

const Home = ({ navigation }: any) => {
  const { posts, loading } = useFetchPosts();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleOpenComments = () => {
    bottomSheetRef?.current?.present();
  };

  return (
    <View>
      <View>
        <SafeAreaView className="bg-white">
          <AppHeader />
        </SafeAreaView>
        <View>
          <View className="w-[96%] mx-auto">
            {loading ? (
              <>
                <View>
                  <AppText
                    text="Loading Posts..."
                    style="text-center my-2 font-semibold text-lg text-main_gray"
                  />
                </View>
              </>
            ) : (
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                data={posts}
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
                            <TouchableOpacity className="flex-row items-center space-x-1">
                              <BookmarkIcon color={"#6B7280"} />
                            </TouchableOpacity>
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
            )}
          </View>
        </View>
      </View>
      <Sheet bottomSheetRef={bottomSheetRef} snapPoints={["55%"]}>
        <Comments />
      </Sheet>
    </View>
  );
};

export default Home;
