import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/layouts/authlayout";

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
