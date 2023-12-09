import { View } from "react-native";
import { Paragraph } from "../Paragraph";
import QRCode from "react-native-qrcode-svg";
import { getDimensions } from "../../utils/getDimensions";
import LogoApp from "../../../assets/logo.png";
import { useAuth } from "../../hooks/useAuth";
import styles from "./styles";
import { Line } from "../Line";
import { AccountStatus } from "../AccountStatus";

const { screenWidth } = getDimensions();

export function MainHeader() {
  const { rut } = useAuth();

  return (
    <View style={styles.header}>
      <Paragraph size={20}>Cartera / Billetera</Paragraph>
      <View style={styles.content}>
        <View style={styles.qrContainer}>
          <AccountStatus />
          <Line />
          <View style={styles.qrWrapper}>
            <QRCode
              value={rut}
              logo={LogoApp}
              size={screenWidth - 150}
              backgroundColor="#fff"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
