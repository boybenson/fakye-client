import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  ArrowUpTrayIcon,
  BookmarkIcon,
  Cog8ToothIcon,
} from "react-native-heroicons/outline";
import AppText from "../../common/Core/AppText";
import { ChatBubbleLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { posts } from "../../data";
import ImagesGrid from "./ImagesGrid";
import Sheet from "../../common/sheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const images = [
  require("../../../assets/images/shoe.jpeg"),
  require("../../../assets/images/dress1.jpeg"),
  require("../../../assets/images/lingery.jpeg"),
  require("../../../assets/images/hoodie.jpeg"),
];

const Home = () => {
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
          <View className="bg-white w-[96%] mx-auto flex-row items-center justify-between py-2">
            <Image
              source={require("../../../assets/images/pp.jpeg")}
              style={{ width: 32, height: 32, borderRadius: 100 }}
            />
            <AppText
              style="text-main_black text-lg font-semibold text-main_green"
              text="Fakye"
            />
            <TouchableOpacity>
              <Cog8ToothIcon size={30} color={"#1A0E00"} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View>
          <View className="w-[96%] mx-auto">
            <FlatList
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
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
                        <AppText text="Humble" style="text-sm ml-2" />
                      </View>
                      <AppText text="5min ago" style="text-xs text-main_gray" />
                    </View>
                    <View className="mt-2">
                      <AppText
                        text="Nike Shoes"
                        style="text-lg font-semibold text-main_dark"
                      />
                      <AppText
                        text="The description of the item you want to dash for free goes here and can be long to occupy three lines"
                        style="text-xs text-main_gray"
                      />
                      <View className="mt-2 border border-main_gray/30 rounded-xl overflow-hidden">
                        <ImagesGrid images={images} />
                      </View>
                    </View>
                    <View>
                      <View className="flex-row items-center justify-between mt-3">
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
                          <View>
                            <AppText text="120" />
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <ArrowUpTrayIcon color={"#6B7280"} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
      <Sheet bottomSheetRef={bottomSheetRef}></Sheet>
    </View>
  );
};

export default Home;
