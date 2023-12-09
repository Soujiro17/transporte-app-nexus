import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../Input";
import { Title } from "../Title";
import { Paragraph } from "../Paragraph";
import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import styles from "./styles";
import { user } from "../../data/user";

export function LoginForm() {
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth, fillState } = useAuth();
  const navigation = useNavigation();

  const handleRut = (v) => setRut(v);
  const handlePassword = (v) => setPassword(v);

  const onSubmit = () => {
    setAuth({ access: "sldfjoijrogierjogijeorg" });
    fillState(user);
    navigation.replace("Main");
  };

  return (
    <View style={styles.loginContainer}>
      <Title textAlign="center">Iniciar sesión</Title>
      <View style={styles.inputContainer}>
        <Input value={rut} onChangeText={handleRut} placeholder="RUT" />
        <Input
          value={password}
          onChangeText={handlePassword}
          type="password"
          placeholder="Contraseña"
        />
        <Button onPress={onSubmit}>Iniciar sesión</Button>
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
