import { BlueGradientLayout } from "../../layouts/BlueGradientLayout";
import { Title } from "../../components/Title";
import { View } from "react-native";
import styles from "./styles";
import { Logo } from "../../components/Logo";

export function HomeScreen() {
  return (
    <BlueGradientLayout>
      <View style={styles.container}>
        <Logo />
        <Title>Home Screen</Title>
      </View>
    </BlueGradientLayout>
  );
}
