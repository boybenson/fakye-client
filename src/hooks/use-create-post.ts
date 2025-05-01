import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { endpoints } from "../apis/endpoints";
import { CreatePostPayload } from "../apis/types";
import { handleApiError } from "../helpers";

const useCreatePost = () => {
  const { mutate, ...rest } = useMutation({
    mutationFn: async (payload: CreatePostPayload) => {
      const res = await axios.post(
        endpoints.createPost,
        { ...payload },
        { headers: { "Content-Type": "application/json" } }
      );

      return res?.data;
    },
    onError: (err: any) => {
      return handleApiError(err, "error");
    },
  });

  return {
    createPost: mutate,
    ...rest,
  };
};

export default useCreatePost;
