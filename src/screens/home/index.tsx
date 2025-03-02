import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { ArrowUpTrayIcon, BookmarkIcon } from "react-native-heroicons/outline";
import AppText from "../../common/Core/AppText";
import { ChatBubbleLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { posts } from "../../data";
import ImagesGrid from "./ImagesGrid";
import Sheet from "../../common/sheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import AppHeader from "../../common/appHeader";

const images = [
  require("../../../assets/images/shoe.jpeg"),
  require("../../../assets/images/dress1.jpeg"),
  require("../../../assets/images/lingery.jpeg"),
  require("../../../assets/images/hoodie.jpeg"),
];

const Home = ({ navigation }: any) => {
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
