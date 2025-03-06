import { SafeAreaView, TouchableOpacity, View } from "react-native";
import React from "react";
import AuthHeader from "../../common/authHeader";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import NoBookmarks from "./NoBookmarks";
import useAuthStore from "../../zustand/auth-store";
import useFetchBookmarks from "../../hooks/use-fetch-bookmarks";
import AppText from "../../common/Core/AppText";
import Posts from "../Posts";

const Bookmarks = () => {
  const navigation = useNavigation();
  const user = useAuthStore((state) => state.user);
  const { posts, loading } = useFetchBookmarks({
    filter: { userId: user?.id },
  });

  const filteredPosts = posts?.map((post) => post?.post);

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-[96%] mx-auto h-full justify-between">
        <View className="mt-4">
          <AuthHeader
            title="Bookmarks"
            icon={
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ChevronLeftIcon size={30} color={"#1A0E00"} />
              </TouchableOpacity>
            }
          />
          {loading && (
            <>
              <View>
                <AppText
                  text="Loading bookmarks..."
                  style="text-center my-2 font-semibold text-lg text-main_gray"
                />
              </View>
            </>
          )}

          {!loading && posts.length < 1 && <NoBookmarks />}

          <View>
            <Posts posts={filteredPosts ?? []} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bookmarks;
