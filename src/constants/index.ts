import { AuthStackParamList } from "../layouts/authlayout";

export const authScreens: Record<
  keyof AuthStackParamList,
  keyof AuthStackParamList
> = {
  SignIn: "SignIn",
  SignUp: "SignUp",
  Otp: "Otp",
};
