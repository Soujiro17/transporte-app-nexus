import { Dimensions } from "react-native";

export function getDimensions() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  return { windowHeight, windowWidth, screenHeight, screenWidth };
}
