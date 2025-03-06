import { useMutation } from "@apollo/client";
import { SEARCH_POSTS } from "../graphql/mutations";
import {
  SearchPostsMutation,
  SearchPostsMutationVariables,
} from "../__types__/graphql";

const useSearchPosts = () => {
  const [searchPosts, { loading, ...rest }] = useMutation<
    SearchPostsMutation,
    SearchPostsMutationVariables
  >(SEARCH_POSTS, {
    fetchPolicy: "network-only",
  });
  return {
    searchPosts,
    loading,
    ...rest,
  };
};

export default useSearchPosts;
