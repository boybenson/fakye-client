import React, { useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import PostCard from "./components/PostCard";

type Iprops = {
  posts: any;
};

const Posts = ({ posts }: Iprops) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={posts ?? []}
      renderItem={({ item }) => {
        return <PostCard item={item} />;
      }}
    />
  );
};

export default Posts;
