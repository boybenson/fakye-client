import { SafeAreaView, View } from "react-native";
import React from "react";
import AppText from "../../common/Core/AppText";
import AppHeader from "../../common/appHeader";
import useFetchPosts from "../../hooks/use-fetch-posts";
import Posts from "../Posts";

const Home = () => {
  const { posts, isLoading } = useFetchPosts();
  return (
    <SafeAreaView className="bg-white flex-1">
      <AppHeader />

      <View className="w-[96%] mx-auto flex-1">
        {isLoading && (
          <View>
            <AppText
              text="Loading Posts..."
              style="text-center my-2 font-semibold text-lg text-main_gray"
            />
          </View>
        )}

        {!isLoading && posts?.length < 1 && (
          <View>
            <AppText
              text="No posts available"
              style="text-center my-2 font-semibold text-lg text-main_gray"
            />
          </View>
        )}

        {!isLoading && posts?.length > 0 && <Posts posts={posts} />}
      </View>
    </SafeAreaView>
  );
};

export default Home;
