import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation SignUp($content: SignUpContent) {
    signUp(content: $content)
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($content: SignInContent) {
    signIn(content: $content) {
      user {
        id
        fullName
        phone
      }
      accessToken
    }
  }
`;

export const VERIFY_OTP_CODE = gql`
  mutation VerifyOtp($content: VerifyOtpContent) {
    verifyOtp(content: $content)
  }
`;

export const TOGGLE_BOOKMARK = gql`
  mutation ToggleBookMark($content: ToggleBookMarkContent) {
    toggleBookMark(content: $content)
  }
`;
