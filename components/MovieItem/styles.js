import { StyleSheet, Dimensions, StatusBar } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: screenHeight - statusBarHeight,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default styles;
