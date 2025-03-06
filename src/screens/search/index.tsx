import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import AppText from "../../common/Core/AppText";
import { SearchPostsFilter } from "../../__types__/graphql";
import { useForm, Controller } from "react-hook-form";
import useSearchPosts from "../../hooks/use-search-posts";
import Posts from "../Posts";
import { debounce } from "lodash";

const Search = () => {
  const [filteredResults, setFilteredResults] = useState<any>([]);
  const { control, watch, setValue } = useForm<SearchPostsFilter>();
  const { searchPosts, loading } = useSearchPosts();

  const typedFilter = watch("query");

  const debouncedSearch = useCallback(
    debounce((query) => {
      if (!query) return setFilteredResults([]);
      searchPosts({
        variables: { filter: { query } },
        onCompleted: (res) => setFilteredResults(res?.searchPosts),
        onError: (err) => console.error("Search Error:", err),
      });
    }, 300),
    []
  );

  useEffect(() => {
    if (!typedFilter) {
      if (filteredResults.length > 0) setFilteredResults([]);
      return;
    }
    debouncedSearch(typedFilter);
  }, [typedFilter]);

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="w-[96%] mx-auto">
        <AppText text="Search" style="text-2xl font-semibold mt-4" />
        <View className="flex flex-row items-center space-x-2 mt-3">
          <View className="flex-1">
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  keyboardType="web-search"
                  className="w-full border border-gray-400 p-2.5 rounded-2xl"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value ?? ""}
                />
              )}
              name="query"
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setFilteredResults([]);
              setValue("query", "");
            }}
          >
            <AppText text="Cancel" />
          </TouchableOpacity>
        </View>

        <View>
          <AppText text="Recent results" style="text-lg font-normal mt-4" />
          <View className="border-t border-gray-300 py-2" />

          {loading && (
            <View>
              <AppText
                text="Loading Posts..."
                style="text-center my-2 font-semibold text-lg text-main_gray"
              />
            </View>
          )}

          <Posts posts={filteredResults ?? []} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
