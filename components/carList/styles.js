import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#000",
    opacity: 0.8,
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
