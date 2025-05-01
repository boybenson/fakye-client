import axios from "axios";
import { endpoints } from "../apis/endpoints";
import { useQuery } from "@tanstack/react-query";

const useFetchBookmarks = (body: { userId: number }) => {
  const { data, ...rest } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: async () => {
      const res = await axios.get(endpoints.getBookmarks, {
        params: body,
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

export default useFetchBookmarks;
