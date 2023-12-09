import { View } from "react-native";
import { Input } from "../Input";
import { Title } from "../Title";
import styles from "./styles";
import { Paragraph } from "../Paragraph";
import { Anchor } from "../Anchor";
import { Button } from "../Button";

export function LoginForm() {
  return (
    <View style={styles.loginContainer}>
      <Title textAlign="center">Iniciar sesión</Title>
      <View style={styles.inputContainer}>
        <Input placeholder="RUT" />
        <Input type="password" placeholder="Contraseña" />
        <Button>Iniciar sesión</Button>
      </View>
      <View style={styles.containerRow}>
        <Anchor size={15} textAlign="center" to={"/"}>
          ¿Olvidaste tu contraseña?
        </Anchor>
      </View>
      <View style={styles.containerRow}>
        <Paragraph textAlign="center">¿Eres nuevo?</Paragraph>
        <Anchor size={15} textAlign="center" to={"/"}>
          Crear una cuenta
        </Anchor>
      </View>
    </View>
  );
}
