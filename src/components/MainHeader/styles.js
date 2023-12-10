import { StyleSheet } from "react-native";
import { getDimensions } from "../../utils/getDimensions";

const { screenWidth } = getDimensions();

const styles = StyleSheet.create({
  header: {
    width: "100%",
    position: "relative",
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 40,
  },

  blueCard: {
    top: 0,
    left: 0,
    height: "90%",
    width: screenWidth,
    minHeight: "50%",
    backgroundColor: "#2194b9",
    position: "absolute",
    zIndex: -1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  qrContainer: {
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    gap: 20,
  },
  qrWrapper: {
    alignItems: "center",
  },
});

export default styles;
