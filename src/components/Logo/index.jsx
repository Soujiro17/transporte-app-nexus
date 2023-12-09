import { Image } from "react-native";
import LogoImg from "../../../assets/logo.png";

export function Logo({ height = 250, width = 250 }) {
  const customStyle = {
    height,
    width,
  };

  return (
    <Image
      style={[customStyle]}
      height={height}
      width={width}
      source={LogoImg}
    />
  );
}
