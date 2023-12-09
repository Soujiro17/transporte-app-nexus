import { Image, Pressable, View } from "react-native";
import { Paragraph } from "../../components/Paragraph";
import styles from "./styles";
import { MainHeader } from "../../components/MainHeader";
import { menu } from "../../data/menu";

export function MenuShortcut({ children, icon, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.menuItem}>
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

export function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MainHeader />
      <View style={styles.main}>
        <Paragraph size={15} fontWeight="bold" textAlign="center" color="#000">
          Escanea este código QR para pagar tu próximo pasaje.
        </Paragraph>
        <View style={styles.menu}>
          {menu.map((menuItem, index) => (
            <MenuShortcut
              key={index}
              onPress={() => navigation.navigate(menuItem.path)}
              icon={menuItem.icon}
            >
              {menuItem.text}
            </MenuShortcut>
          ))}
        </View>
      </View>
    </View>
  );
}
