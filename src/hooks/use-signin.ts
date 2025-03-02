import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { SignInMutation, SignInMutationVariables } from "../__types__/graphql";

const useSignIn = () => {
  const [signIn, { loading, ...rest }] = useMutation<
    SignInMutation,
    SignInMutationVariables
  >(SIGN_IN, {
    fetchPolicy: "network-only",
  });
  return {
    signIn,
    loading,
    ...rest,
  };
};

export default useSignIn;
