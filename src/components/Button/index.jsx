import { Pressable } from "react-native";
import styles from "./styles.js";
import { Paragraph } from "../Paragraph/index.jsx";

export function Button({
  children,
  size = 20,
  onPress,
  width,
  style,
  ...props
}) {
  const customStyle = {
    width,
  };

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Paragraph
        textAlign="center"
        color="#000"
        size={size}
        style={[customStyle, style]}
        {...props}
      >
        {children}
      </Paragraph>
    </Pressable>
  );
}
