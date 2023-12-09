import { Link } from "@react-navigation/native";
import styles from "./styles";

export function Anchor({
  children,
  to,
  size = 16,
  textAlign,
  style,
  ...props
}) {
  const customStyle = {
    fontSize: size,
    textAlign,
  };

  return (
    <Link style={[styles.anchor, customStyle, style]} to={to} {...props}>
      {children}
    </Link>
  );
}
