import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";
import { SignUpMutation, SignUpMutationVariables } from "../__types__/graphql";

const useSignUp = () => {
  const [signUp, { loading, ...rest }] = useMutation<
    SignUpMutation,
    SignUpMutationVariables
  >(SIGN_UP, {
    fetchPolicy: "network-only",
  });
  return {
    signUp,
    loading,
    ...rest,
  };
};

export default useSignUp;
