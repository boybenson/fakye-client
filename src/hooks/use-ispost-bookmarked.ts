import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { endpoints } from "../apis/endpoints";

const useIsPostBookmarked = (body: { userId: number; postId: number }) => {
  const { data, ...rest } = useQuery({
    queryKey: ["isPostBookmarked"],
    queryFn: async () => {
      const res = await axios.get(endpoints.isPostBookmarked, {
        params: body,
        headers: { "Content-Type": "application/json" },
      });
      return res?.data;
    },
  });

  return {
    isPostBookmarked: data?.isBookmarked,
    ...rest,
  };
};

export default useIsPostBookmarked;
