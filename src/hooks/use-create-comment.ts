import { useMutation } from "@tanstack/react-query";
import { handleApiError } from "../helpers";
import { endpoints } from "../apis/endpoints";
import axios from "axios";

const useCreateComment = () => {
  const { mutate, ...rest } = useMutation({
    mutationFn: async (body: {
      userId: number;
      postId: number;
      message: string;
    }) => {
      const res = await axios.post(endpoints.createComment, body, {
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
    createComment: mutate,
    ...rest,
  };
};

export default useCreateComment;
