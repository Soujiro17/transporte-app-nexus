import { TextInput } from "react-native";
import styles from "./styles";

export function Input({ type = "text", placeholder, width, ...props }) {
  const customStyle = {
    width,
  };
  return (
    <TextInput
      secureTextEntry={type === "password"}
      placeholder={placeholder}
      style={[styles.input, customStyle]}
      {...props}
    />
  );
}
