import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    maxHeight: "50%",
    backgroundColor: "#2194b9",
    paddingTop: 30,
    paddingBottom: 60,
    paddingHorizontal: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    gap: 20,
  },

  qrContainer: {
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    paddingTop: 35,
    gap: 20,
  },
  qrWrapper: {
    alignItems: "center",
    paddingBottom: 10,
  },
});

export default styles;
