import { AppStackParamList } from "../layouts/applayout";
import { AuthStackParamList } from "../layouts/authlayout";
import { RootStackParamList } from "../navigation/root";

export const authScreens: Record<
  keyof AuthStackParamList,
  keyof AuthStackParamList
> = {
  SignIn: "SignIn",
  SignUp: "SignUp",
  Otp: "Otp",
};

export const appScreens: Record<
  keyof AppStackParamList,
  keyof AppStackParamList
> = {
  MainApp: "MainApp",
};

export const rootScreens: Record<
  keyof RootStackParamList,
  keyof RootStackParamList
> = {
  App: "App",
  Auth: "Auth",
};

export const tabScreens = {
  HomeTab: "HomeTab",
  SearchTab: "SearchTab",
  PostItemTab: "PostItemTab",
  ProfileTab: "ProfileTab",
  ChatsTab: "ChatsTab",
};
