import { BlueGradientLayout } from "../../layouts/BlueGradientLayout";
import { Title } from "../../components/Title";
import { View } from "react-native";
import styles from "./styles";

export function HomeScreen() {
  return (
    <BlueGradientLayout>
      <View style={styles.container}>
        <Title>Home Screen</Title>
      </View>
    </BlueGradientLayout>
  );
}
