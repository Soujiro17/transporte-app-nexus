import { BlueGradientLayout } from "../../layouts/BlueGradientLayout";
import { View } from "react-native";
import styles from "./styles";
import { Logo } from "../../components/Logo";
import { LoginForm } from "../../components/LoginForm";
import { ExpandInputLayout } from "../../layouts/ExpandInputLayout";

export function HomeScreen() {
  return (
    <BlueGradientLayout>
      <View style={styles.container}>
        <ExpandInputLayout>
          <View style={styles.wrapper}>
            <Logo />
            <LoginForm />
          </View>
        </ExpandInputLayout>
      </View>
    </BlueGradientLayout>
  );
}
