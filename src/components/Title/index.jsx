import { Text } from "react-native";
import styles from "./styles";

export function Title({
  children,
  style,
  size = 40,
  color = "#fff",
  ...props
}) {
  const customStyles = {
    color,
    fontSize: size,
  };

  return (
    <Text style={[styles.title, customStyles, style]} {...props}>
      {children}
    </Text>
  );
}
