import { LinearGradient } from "expo-linear-gradient";
import { getDimensions } from "../utils/getDimensions";

const { screenHeight, screenWidth } = getDimensions();

export function BlueGradientLayout({ children, style, minHeight }) {
  return (
    <LinearGradient
      style={[{ minHeight: minHeight || screenHeight }, style]}
      colors={["#164F67", "#123144"]}
    >
      {children}
    </LinearGradient>
  );
}
