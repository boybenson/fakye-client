import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { tabScreens } from "../../constants";
import {
  ChatBubbleLeftRightIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import Home from "../../screens/home";
import Search from "../../screens/search";
import NewPost from "../../screens/newPost";
import { UserGroupIcon } from "react-native-heroicons/outline";
import Chats from "../../screens/chats";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return <Text>Home</Text>;
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === tabScreens.HomeTab) {
            return focused ? (
              <HomeIcon color={"#08A045"} />
            ) : (
              <HomeIcon color={"#6B7280"} />
            );
          }
          if (route.name === tabScreens.SearchTab) {
            return focused ? (
              <MagnifyingGlassIcon color={"#08A045"} />
            ) : (
              <MagnifyingGlassIcon color={"#6B7280"} />
            );
          }
          if (route.name === tabScreens.PostItemTab) {
            return focused ? (
              <PencilSquareIcon color={"#08A045"} />
            ) : (
              <PencilSquareIcon color={"#6B7280"} />
            );
          }
          if (route.name === tabScreens.ChatsTab) {
            return focused ? (
              <ChatBubbleLeftRightIcon color={"#08A045"} />
            ) : (
              <ChatBubbleLeftRightIcon color={"#6B7280"} />
            );
          }
          if (route.name === tabScreens.FoundationTab) {
            return focused ? (
              <UserGroupIcon color={"#08A045"} />
            ) : (
              <UserGroupIcon color={"#6B7280"} />
            );
          }
        },
        tabBarActiveTintColor: "#21CA97",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          padding: 30,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name={tabScreens.HomeTab} component={Home} />
      <Tab.Screen name={tabScreens.SearchTab} component={Search} />
      <Tab.Screen name={tabScreens.PostItemTab} component={NewPost} />
      <Tab.Screen name={tabScreens.FoundationTab} component={HomeScreen} />
      <Tab.Screen name={tabScreens.ChatsTab} component={Chats} />
    </Tab.Navigator>
  );
};

export { BottomTabs };
