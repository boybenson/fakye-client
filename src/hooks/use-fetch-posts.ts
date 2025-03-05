import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POSTS } from "../graphql/queries";
import { GetPostsQuery, GetPostsQueryVariables } from "../__types__/graphql";

const useFetchPosts = () => {
  const { data, ...rest } = useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GET_POSTS,
    {
      fetchPolicy: "network-only",
    }
  );
  return {
    posts: data?.getPosts ?? [],
    ...rest,
  };
};

export default useFetchPosts;
