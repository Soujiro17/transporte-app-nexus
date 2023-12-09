import { Text } from "react-native";
import styles from "./styles";

export function Paragraph({
  children,
  textAlign,
  style,
  color = "#fff",
  ...props
}) {
  const customStyle = {
    textAlign,
    color,
  };

  return (
    <Text style={[styles.text, customStyle, style]} {...props}>
      {children}
    </Text>
  );
}
