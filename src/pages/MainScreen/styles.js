import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main: {
    flex: 1,
    paddingTop: 120,
    paddingHorizontal: 20,
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 50,
    rowGap: 20,
  },

  menuItem: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "48%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    gap: 5,
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 3,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  itemImg: {
    height: "50%",
    resizeMode: "contain",
    width: "20%",
  },
});

export default styles;
