import { Pressable } from "react-native";
import styles from "./styles.js";
import { Paragraph } from "../Paragraph/index.jsx";

export function Button({
  children,
  size = 20,
  onPress,
  width,
  style,
  paraphStyle,
  ...props
}) {
  const customStyle = {
    width,
  };

  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Paragraph
        textAlign="center"
        color="#000"
        size={size}
        style={[customStyle, paraphStyle]}
        {...props}
      >
        {children}
      </Paragraph>
    </Pressable>
  );
}
