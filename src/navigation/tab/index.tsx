import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { tabScreens } from "../../constants";
import {
  ChatBubbleLeftRightIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import Home from "../../screens/home";

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
          if (route.name === tabScreens.ProfileTab) {
            return focused ? (
              <UserIcon color={"#08A045"} />
            ) : (
              <UserIcon color={"#6B7280"} />
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
      <Tab.Screen name={tabScreens.SearchTab} component={HomeScreen} />
      <Tab.Screen name={tabScreens.PostItemTab} component={HomeScreen} />
      <Tab.Screen name={tabScreens.ChatsTab} component={HomeScreen} />
      <Tab.Screen name={tabScreens.ProfileTab} component={HomeScreen} />
    </Tab.Navigator>
  );
};

export { BottomTabs };
