import { useQuery } from "@tanstack/react-query";
import { endpoints } from "../apis/endpoints";
import axios from "axios";

const useFetchComments = (postId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await axios.get(endpoints.getComments, {
        params: {
          postId,
        },
        headers: { "Content-Type": "application/json" },
      });
      return res?.data;
    },
  });

  return {
    comments: data ?? [],
    ...rest,
  };
};

export default useFetchComments;
