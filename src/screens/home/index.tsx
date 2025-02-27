import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { BookmarkIcon, Cog8ToothIcon } from "react-native-heroicons/outline";
import AppText from "../../common/Core/AppText";
import {
  ChatBubbleLeftIcon,
  HeartIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
import ImageView from "react-native-image-viewing";
import { posts } from "../../data";

const images = [
  {
    uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
  },
  {
    uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
  },
  {
    uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
  },
];

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [visible, setIsVisible] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View>
      <SafeAreaView className="bg-white">
        <View className="bg-white w-[96%] mx-auto flex flex-row items-center justify-between py-2">
          <Image
            source={require("../../../assets/images/pp.jpeg")}
            style={{ width: 32, height: 32, borderRadius: "100%" }}
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
                  <View className="flex flex-row items-center justify-between">
                    <View className="flex flex-row items-center">
                      <Image
                        source={require("../../../assets/images/pp.jpeg")}
                        style={{ width: 32, height: 32, borderRadius: "100%" }}
                      />
                      <AppText text="Humble" style="text-sm ml-2" />
                    </View>
                    <AppText text="5min ago" style="text-xs text-main_gray" />
                  </View>
                  <View className="mt-2">
                    <AppText
                      text="Nike Shoes"
                      style="text-lg font-semibold text-main_gray"
                    />
                    <AppText
                      text="The description of the item you want to dash for free goes here and can be long to occupy three lines"
                      style="text-xs text-main_gray"
                    />
                    <View className="mt-3">
                      <TouchableOpacity onPress={() => setIsVisible(true)}>
                        <Image
                          source={require("../../../assets/images/shoe.jpeg")}
                          style={{
                            width: 380,
                            height: 250,
                            borderRadius: "3%",
                          }}
                        />
                      </TouchableOpacity>
                      <ImageView
                        images={images}
                        imageIndex={0}
                        visible={visible}
                        onRequestClose={() => setIsVisible(false)}
                      />
                    </View>
                  </View>
                  <View>
                    <View className="flex flex-row items-center justify-between mt-3">
                      <TouchableOpacity className="flex flex-row items-center space-x-2">
                        <ChatBubbleLeftIcon color={"#6B7280"} />
                        <AppText style="ml-2" text="120" />
                      </TouchableOpacity>
                      <TouchableOpacity className="flex flex-row items-center space-x-2">
                        <HeartIcon color={"#6B7280"} />
                        <AppText style="ml-2" text="120" />
                      </TouchableOpacity>
                      <TouchableOpacity className="flex flex-row items-center space-x-2">
                        <BookmarkIcon color={"#6B7280"} />
                        <AppText style="ml-2" text="120" />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <ShareIcon color={"#6B7280"} />
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
  );
};

export default Home;
