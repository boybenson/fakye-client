import "react-native-reanimated";
import "react-native-gesture-handler";
import "./gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootStack from "./src/navigation/root";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toasts } from "@backpackapp-io/react-native-toast";
import { StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <QueryClientProvider client={queryClient}>
          <BottomSheetModalProvider>
            <RootStack />
          </BottomSheetModalProvider>
        </QueryClientProvider>
        <Toasts />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
