import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { endpoints } from "../apis/endpoints";
import { handleApiError } from "../helpers";

const useSignIn = () => {
  const { mutate, ...rest } = useMutation({
    mutationFn: async (phone: string) => {
      const res = await axios.post(
        endpoints.signIn,
        { phone: phone?.slice(1) },
        { headers: { "Content-Type": "application/json" } }
      );

      return res?.data;
    },
    onError: (err: any) => {
      handleApiError(err, "Failed to load data");
      return null;
    },
  });

  return {
    signIn: mutate,
    ...rest,
  };
};

export default useSignIn;
