import { TextInput } from "react-native";
import styles from "./styles";

export function Input({
  type = "text",
  placeholder,
  width,
  textAlignVertical = "",
  ...props
}) {
  const customStyle = {
    width,
    textAlignVertical,
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
