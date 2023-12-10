import { View } from "react-native";
import { Paragraph } from "../Paragraph";
import QRCode from "react-native-qrcode-svg";
import { getDimensions } from "../../utils/getDimensions";
import LogoApp from "../../../assets/logo.png";
import { useAuth } from "../../hooks/useAuth";
import styles from "./styles";
import { Line } from "../Line";
import { AccountStatus } from "../AccountStatus";
import { getUser } from "../../../lib/user";
import { RefreshControlApp } from "../RefreshControlApp";
import { notifyMessage } from "../../utils/notifyMessage";

const { screenWidth } = getDimensions();

export function MainHeader() {
  const { rut, fillState } = useAuth();

  const handleUserState = async () => {
    try {
      const data = await getUser();

      fillState(data.usuario);
      notifyMessage("Información actualizada con éxito");
    } catch (err) {
      notifyMessage("Error al obtener al usuario");
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.blueCard}></View>
      <RefreshControlApp style={styles.card} onRefreshCall={handleUserState}>
        <Paragraph size={20}>Cartera / Billetera</Paragraph>
        <View style={styles.content}>
          <View style={styles.qrContainer}>
            <AccountStatus />
            <Line />
            <View style={styles.qrWrapper}>
              <QRCode
                value={rut || ""}
                logo={LogoApp}
                size={screenWidth - 150}
                backgroundColor="#fff"
              />
              <Paragraph
                size={17}
                fontWeight="bold"
                textAlign="center"
                color="#000"
              >
                Escanea este código QR para pagar tu próximo pasaje.
              </Paragraph>
            </View>
          </View>
        </View>
      </RefreshControlApp>
    </View>
  );
}
