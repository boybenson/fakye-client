import "react-native-reanimated";
import "react-native-gesture-handler";
import "./gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootStack from "./src/navigation/root";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ApolloProvider } from "@apollo/client";
import client from "./src/graphql";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toasts } from "@backpackapp-io/react-native-toast";
import { StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <GestureHandlerRootView style={styles.container}>
          <BottomSheetModalProvider>
            <RootStack />
          </BottomSheetModalProvider>
          <Toasts />
        </GestureHandlerRootView>
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default App;
