import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { endpoints } from "../apis/endpoints";
import { handleApiError } from "../helpers";

const useSignUp = () => {
  const { mutate, ...rest } = useMutation({
    mutationFn: async ({ phone, name }: { phone: string; name: string }) => {
      const res = await axios.post(
        endpoints.signUp,
        { phone, name },
        { headers: { "Content-Type": "application/json" } }
      );

      return res?.data;
    },
    onError: (err: any) => {
      return handleApiError(err, "error");
    },
  });

  return {
    signUp: mutate,
    ...rest,
  };
};

export default useSignUp;
