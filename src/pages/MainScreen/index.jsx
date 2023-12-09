import { Image, Pressable, View } from "react-native";
import { Paragraph } from "../../components/Paragraph";
import styles from "./styles";
import { MainHeader } from "../../components/MainHeader";

export function MenuShortcut({ children, icon }) {
  return (
    <Pressable style={styles.menuItem}>
      {icon && <Image style={styles.itemImg} source={icon} />}
      <Paragraph
        fontWeight="bold"
        width={icon ? "50%" : "100%"}
        color="#000"
        size={icon ? 13 : 16}
        textAlign="center"
      >
        {children}
      </Paragraph>
    </Pressable>
  );
}

export function MainScreen() {
  return (
    <View style={styles.container}>
      <MainHeader />
      <View style={styles.main}>
        <Paragraph size={15} fontWeight="bold" textAlign="center" color="#000">
          Escanea este código QR para pagar tu próximo pasaje.
        </Paragraph>
        <View style={styles.menu}>
          <MenuShortcut icon={require("../../../assets/billete.png")}>
            Recargar dinero
          </MenuShortcut>
          <MenuShortcut icon={require("../../../assets/registros.png")}>
            Movimientos
          </MenuShortcut>
          <MenuShortcut icon={require("../../../assets/bus.png")}>
            Buses
          </MenuShortcut>
          <MenuShortcut icon={require("../../../assets/perfil.png")}>
            Perfil
          </MenuShortcut>
        </View>
      </View>
    </View>
  );
}
