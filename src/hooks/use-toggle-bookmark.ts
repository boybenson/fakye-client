import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { endpoints } from "../apis/endpoints";
import { handleApiError } from "../helpers";

const useToggleBookmark = () => {
  const { mutate, ...rest } = useMutation({
    mutationFn: async (body: { userId: number; postId: number }) => {
      const res = await axios.post(endpoints.toggleBookmark, body, {
        headers: { "Content-Type": "application/json" },
      });

      return res?.data;
    },

    onError: (err: any) => {
      handleApiError(err, "Failed to load data");
      return null;
    },
  });
  return {
    toggleBookmark: mutate,
    ...rest,
  };
};

export default useToggleBookmark;
