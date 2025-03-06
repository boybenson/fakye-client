import { useQuery } from "@apollo/client";
import { GET_IS_POST_BOOKMARKED } from "../graphql/queries";
import { QueryIsPostBookmarkedArgs } from "../__types__/graphql";

const useIsPostBookmarked = (variables?: QueryIsPostBookmarkedArgs) => {
  const { data, ...rest } = useQuery<any, QueryIsPostBookmarkedArgs>(
    GET_IS_POST_BOOKMARKED,
    {
      fetchPolicy: "network-only",
      variables,
    }
  );
  return {
    isPostBookmarked: data?.isPostBookmarked,
    ...rest,
  };
};

export default useIsPostBookmarked;
