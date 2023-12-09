import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./pages/HomeScreen";
import { AuthProvider } from "./contexts/AuthContext";
import { MainScreen } from "./pages/MainScreen";

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

registerRootComponent(Main);
