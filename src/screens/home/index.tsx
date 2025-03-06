import { SafeAreaView, View } from "react-native";
import React from "react";
import AppText from "../../common/Core/AppText";
import AppHeader from "../../common/appHeader";
import useFetchPosts from "../../hooks/use-fetch-posts";
import Posts from "../Posts";

const Home = ({ navigation }: any) => {
  const { posts, loading } = useFetchPosts();

  return (
    <View>
      <View>
        <SafeAreaView className="bg-white">
          <AppHeader />
        </SafeAreaView>
        <View className="bg-white">
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
              <Posts posts={posts ?? []} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
