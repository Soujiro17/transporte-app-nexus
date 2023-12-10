import { StyleSheet } from "react-native";
import { getDimensions } from "../../utils/getDimensions";

const { screenHeight, screenWidth } = getDimensions();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "#2194b9",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  creditCard: {
    height: 200,
    padding: 20,
    paddingVertical: 30,
    width: "100%",
    gap: 10,
    borderRadius: 20,
    backgroundColor: "#2194b9",
  },

  content: {
    gap: 20,
    width: "100%",
  },

  square: {
    zIndex: 0,
    position: "absolute",
    right: "-40%",
    bottom: "-25%",
    width: 300,
    height: 300,
    borderRadius: 1000,
    backgroundColor: "#fff",
    zIndex: -1,
  },
});

export default styles;
