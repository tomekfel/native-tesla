import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 100,
    height: statusBarHeight,
    backgroundColor: "#fff",
    opacity: 0.5,
  },
});

export default styles;
