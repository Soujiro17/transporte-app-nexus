import { registerRootComponent } from "expo";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import { HomeScreen } from "./pages/HomeScreen";
import { AuthProvider } from "./contexts/AuthContext";
import BEBAS_FONT from "../assets/fonts/Bebas-Regular.ttf";

const Stack = createNativeStackNavigator();

function Main() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        BebasRegular: BEBAS_FONT,
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
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
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

registerRootComponent(Main);
