import { useQuery } from "@apollo/client";
import { GET_COMMENTS } from "../graphql/queries";
import {
  GetCommentsQuery,
  GetCommentsQueryVariables,
} from "../__types__/graphql";

const useFetchComments = (variables?: GetCommentsQueryVariables) => {
  const { data, ...rest } = useQuery<
    GetCommentsQuery,
    GetCommentsQueryVariables
  >(GET_COMMENTS, {
    fetchPolicy: "network-only",
    variables,
  });
  return {
    comments: data?.getComments ?? [],
    ...rest,
  };
};

export default useFetchComments;
