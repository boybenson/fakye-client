import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../__types__/graphql";

interface AuthState {
  authToken: string | null | undefined;
  user: User | null | undefined;
  setAuthToken: (data: string | null | undefined) => void;
  setUser: (data: User | undefined | null) => void;
  clearState: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      authToken: null,
      user: null,
      setAuthToken: (data: string | null | undefined) =>
        set(() => ({ authToken: data })),
      setUser: (data: User | undefined | null) => set(() => ({ user: data })),
      clearState: () => set(() => ({ user: null, authToken: null })),
    }),

    {
      name: "auth-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAuthStore;
