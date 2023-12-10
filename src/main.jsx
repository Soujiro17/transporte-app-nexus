import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { HomeScreen } from "./pages/HomeScreen";
import { AuthProvider } from "./contexts/AuthContext";
import { MainScreen } from "./pages/MainScreen";
import { RecargarScreen } from "./pages/RecargarScreen";
import { RutasScreen } from "./pages/RutasScreen";
import { ReclamosScreen } from "./pages/ReclamosScreen";
import { AdminScreen } from "./pages/AdminScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Main" screenOptions={screenOptions}>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Recargar" component={RecargarScreen} />
      <Tab.Screen name="Rutas" component={RutasScreen} />
      <Tab.Screen name="Reclamos" component={ReclamosScreen} />
    </Tab.Navigator>
  );
}

function Main() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
          <Stack.Screen name="Admin" component={AdminScreen} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

registerRootComponent(Main);
