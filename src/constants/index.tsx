import { AppStackParamList } from "../layouts/applayout";
import { AuthStackParamList } from "../layouts/authlayout";
import { WelcomeStackParamList } from "../layouts/welcomlayout";
import { RootStackParamList } from "../navigation/root";
import {
  BellIcon,
  BookmarkIcon,
  UserIcon,
  UsersIcon,
} from "react-native-heroicons/outline";

export const welcomeScreens: Record<
  keyof WelcomeStackParamList,
  keyof WelcomeStackParamList
> = {
  Intro: "Intro",
};

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
  SideDrawer: "SideDrawer",
  NewInterest: "NewInterest",
  Bookmarks: "Bookmarks",
  Chat: "Chat",
};

export const rootScreens: Record<
  keyof RootStackParamList,
  keyof RootStackParamList
> = {
  App: "App",
  Auth: "Auth",
  Welcome: "Welcome",
  CustomSplash: "CustomSplash",
};

export const tabScreens = {
  HomeTab: "HomeTab",
  SearchTab: "SearchTab",
  PostItemTab: "PostItemTab",
  FoundationTab: "FoundationTab",
  ChatsTab: "ChatsTab",
};

export const drawerLinks = [
  {
    label: "Profile",
    icon: <UserIcon color={"#6B7280"} size={25} />,
    link: "",
  },
  {
    label: "Bookmarks",
    icon: <BookmarkIcon color={"#6B7280"} size={25} />,
    link: appScreens.Bookmarks,
  },
  {
    label: "Notifications",
    icon: <BellIcon color={"#6B7280"} size={25} />,
    link: "",
  },
];
