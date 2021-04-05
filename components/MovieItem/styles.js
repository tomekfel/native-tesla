import { StyleSheet, Dimensions, StatusBar } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: screenHeight - statusBarHeight,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#000000a0",
    padding: 10,
  },
  textTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  rating: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  textRating: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
  },
  textDescription: {
    color: "white",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "center",
  },
  imdb: {
    color: "white",
    fontSize: 12,
    fontWeight: "200",
    textAlign: "center",
    paddingTop: 10,
  },
});

export default styles;
