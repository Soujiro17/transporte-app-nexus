import { StyleSheet } from "react-native";
import { getDimensions } from "../../utils/getDimensions";

const { screenWidth, screenHeight } = getDimensions();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  wrapper: {
    alignItems: "center",
  },

  triangle: {
    zIndex: 0,
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    borderTopWidth: screenHeight,
    borderStyle: "solid",
    borderTopColor: "transparent",

    borderRightWidth: screenWidth,
    borderRightColor: "#2194b9",
  },
});

export default styles;
