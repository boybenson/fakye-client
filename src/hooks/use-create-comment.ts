import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../graphql/mutations";
import {
  CreateCommentMutation,
  CreateCommentMutationVariables,
} from "../__types__/graphql";
import { GET_COMMENTS, GET_POSTS } from "../graphql/queries";

const useCreateComment = () => {
  const [createComment, { loading, ...rest }] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(CREATE_COMMENT, {
    fetchPolicy: "network-only",
    refetchQueries: [GET_COMMENTS, GET_POSTS],
  });
  return {
    createComment,
    loading,
    ...rest,
  };
};

export default useCreateComment;
