import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { endpoints } from "../apis/endpoints";

const useFetchPosts = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get(endpoints.getPosts, {
        headers: { "Content-Type": "application/json" },
      });
      return res?.data;
    },
  });

  return {
    posts: data ?? [],
    ...rest,
  };
};

export default useFetchPosts;
