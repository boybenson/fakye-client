import { useMutation } from "@apollo/client";
import { TOGGLE_BOOKMARK } from "../graphql/mutations";
import {
  ToggleBookMarkMutation,
  ToggleBookMarkMutationVariables,
} from "../__types__/graphql";
import { GET_BOOKMARKS, GET_IS_POST_BOOKMARKED } from "../graphql/queries";

const useToggleBookmark = () => {
  const [toggleBookmark, { loading, ...rest }] = useMutation<
    ToggleBookMarkMutation,
    ToggleBookMarkMutationVariables
  >(TOGGLE_BOOKMARK, {
    fetchPolicy: "network-only",
    refetchQueries: [GET_IS_POST_BOOKMARKED, GET_BOOKMARKS],
  });
  return {
    toggleBookmark,
    loading,
    ...rest,
  };
};

export default useToggleBookmark;
