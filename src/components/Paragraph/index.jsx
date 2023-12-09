import { Text } from "react-native";
import styles from "./styles";

export function Paragraph({
  children,
  textAlign,
  style,
  size,
  color = "#fff",
  fontWeight,
  width,
  ...props
}) {
  const customStyle = {
    textAlign,
    color,
    fontSize: size,
    fontWeight,
    width,
  };

  return (
    <Text style={[styles.text, customStyle, style]} {...props}>
      {children}
    </Text>
  );
}
