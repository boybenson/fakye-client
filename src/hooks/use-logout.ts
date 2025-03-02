import { NavigationProp, useNavigation } from "@react-navigation/native";
import useAuthStore from "../zustand/auth-store";
import { RootStackParamList } from "../navigation/root";

const useLogout = () => {
  const rootNavigation = useNavigation<NavigationProp<RootStackParamList>>();
  const clearState = useAuthStore((state) => state.clearState);

  const logout = () => {
    clearState();
    rootNavigation.reset({
      index: 0,
      routes: [{ name: "Auth" }],
    });
  };

  return {
    logout,
  };
};

export default useLogout;
