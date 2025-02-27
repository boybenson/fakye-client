import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootStack from "./src/navigation/root";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const App = () => {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <RootStack />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
