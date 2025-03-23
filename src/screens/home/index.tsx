import { SafeAreaView, View } from "react-native";
import React from "react";
import AppText from "../../common/Core/AppText";
import AppHeader from "../../common/appHeader";
import useFetchPosts from "../../hooks/use-fetch-posts";
import Posts from "../Posts";

const Home = () => {
  const { posts, loading } = useFetchPosts();
  return (
    <View>
      <View>
        <SafeAreaView className="bg-white">
          <AppHeader />
        </SafeAreaView>
        <View className="bg-white py-3">
          <View className="w-[96%] mx-auto mb-[300px]">
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
              <Posts posts={posts ?? []} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
