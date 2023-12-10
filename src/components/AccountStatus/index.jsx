import { View } from "react-native";
import { Title } from "../Title";
import { Paragraph } from "../Paragraph";
import { Line } from "../Line";
import { useAuth } from "../../hooks/useAuth";
import styles from "./styles";
import { RefreshControlApp } from "../RefreshControlApp";
import { notifyMessage } from "../../utils/notifyMessage";
import { getUser } from "../../../lib/user";

export function AccountStatus() {
  const { nombre, saldo, fillState } = useAuth();

  return (
    <View style={styles.accountStatus}>
      <Title size={25} color="#000">
        Hola,{" "}
        <Title fontWeight="bold" size={25} color="#000">
          {nombre}
        </Title>
      </Title>
      <View>
        <Paragraph textAlign="center" size={20} color="#000">
          Tienes disponible
        </Paragraph>
        <Paragraph
          textAlign="center"
          size={40}
          color="#000"
          style={styles.bold}
        >
          <Line />${saldo?.toLocaleString("es-CL")}
        </Paragraph>
        <Paragraph textAlign="center" size={20} color="#000">
          pesos en tu cuenta.
        </Paragraph>
      </View>
    </View>
  );
}
