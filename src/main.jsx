import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./pages/HomeScreen";
import { AuthProvider } from "./contexts/AuthContext";
import { MainScreen } from "./pages/MainScreen";
import { RecargarScreen } from "./pages/RecargarScreen";
import { RutasScreen } from "./pages/RutasScreen";
import { AdminScreen } from "./pages/AdminScreen";

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
          <Stack.Screen name="Recargar" component={RecargarScreen} />
          <Stack.Screen name="Rutas" component={RutasScreen} />
          <Stack.Screen name="Admin" component={AdminScreen} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

registerRootComponent(Main);
