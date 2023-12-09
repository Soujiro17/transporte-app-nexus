import { Text } from "react-native";
import styles from "./styles";

export function Title({
  children,
  style,
  size = 40,
  color = "#fff",
  textAlign,
  fontWeight,
  ...props
}) {
  const customStyles = {
    color,
    fontSize: size,
    fontFamily: "BebasRegular",
    textAlign,
    fontWeight,
  };

  return (
    <Text style={[styles.title, customStyles, style]} {...props}>
      {children}
    </Text>
  );
}
