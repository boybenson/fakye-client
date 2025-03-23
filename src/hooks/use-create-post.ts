import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../graphql/mutations";
import {
  CreatePostMutation,
  CreatePostMutationVariables,
} from "../__types__/graphql";
import { GET_POSTS } from "../graphql/queries";

const useCreatePost = () => {
  const [createPost, { loading, ...rest }] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CREATE_POST, {
    fetchPolicy: "network-only",
    refetchQueries: [GET_POSTS],
  });
  return {
    createPost,
    loading,
    ...rest,
  };
};

export default useCreatePost;
