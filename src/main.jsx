import { registerRootComponent } from "expo";
import { HomeScreen } from "./pages/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      {/* <AuthProvider> */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      {/* </AuthProvider> */}
    </NavigationContainer>
  );
}

registerRootComponent(Main);
