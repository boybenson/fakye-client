import { useMutation } from "@apollo/client";
import { VERIFY_OTP_CODE } from "../graphql/mutations";
import {
  VerifyOtpMutation,
  VerifyOtpMutationVariables,
} from "../__types__/graphql";

const useVerifyOtp = () => {
  const [verifyOtp, { loading, ...rest }] = useMutation<
    VerifyOtpMutation,
    VerifyOtpMutationVariables
  >(VERIFY_OTP_CODE, {
    fetchPolicy: "network-only",
  });
  return {
    verifyOtp,
    loading,
    ...rest,
  };
};

export default useVerifyOtp;
