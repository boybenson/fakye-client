import { useQuery } from "@apollo/client";
import { GET_BOOKMARKS } from "../graphql/queries";
import {
  GetBookmarksQuery,
  GetBookmarksQueryVariables,
} from "../__types__/graphql";

const useFetchBookmarks = (variables?: GetBookmarksQueryVariables) => {
  const { data, ...rest } = useQuery<
    GetBookmarksQuery,
    GetBookmarksQueryVariables
  >(GET_BOOKMARKS, {
    fetchPolicy: "network-only",
    variables,
  });
  return {
    posts: data?.getBookmarks ?? [],
    ...rest,
  };
};

export default useFetchBookmarks;
