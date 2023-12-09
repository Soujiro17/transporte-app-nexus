import { View } from "react-native";
import { Title } from "../Title";
import { Paragraph } from "../Paragraph";
import { Line } from "../Line";
import { useAuth } from "../../hooks/useAuth";
import styles from "./styles";

export function AccountStatus() {
  const { nombre, saldo } = useAuth();
  return (
    <View style={styles.accountStatus}>
      <Title size={18} color="#000">
        Hola,{" "}
        <Title fontWeight="bold" size={18} color="#000">
          {nombre}
        </Title>
      </Title>
      <View>
        <Paragraph textAlign="center" size={17} color="#000">
          Tienes disponible
        </Paragraph>
        <Paragraph
          textAlign="center"
          size={30}
          color="#000"
          style={styles.bold}
        >
          <Line />${saldo?.toLocaleString("es-CL")}
        </Paragraph>
        <Paragraph textAlign="center" size={17} color="#000">
          pesos en tu cuenta.
        </Paragraph>
      </View>
    </View>
  );
}
