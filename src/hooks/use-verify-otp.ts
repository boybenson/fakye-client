import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { endpoints } from "../apis/endpoints";
import { handleApiError } from "../helpers";

const useVerifyOtp = () => {
  const { mutate, ...rest } = useMutation({
    mutationFn: async ({ phone, otp }: { phone: string; otp: string }) => {
      const res = await axios.post(
        endpoints.verifyOtp,
        { phone, otp },
        { headers: { "Content-Type": "application/json" } }
      );

      return res?.data;
    },
    onError: (err: any) => {
      return handleApiError(err, "error");
    },
  });

  return {
    verifyOtp: mutate,
    ...rest,
  };
};

export default useVerifyOtp;
