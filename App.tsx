import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/signIn";
import { screens } from "./src/constants";
import SignUp from "./src/screens/signup";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={screens.SignUp} component={SignUp} />
        <Stack.Screen name={screens.SignIn} component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
