import React from "react";
import { View, ImageBackground } from "react-native";

import styles from "./styles";

const MovieItem = (props) => {
  const { imdb_image_url } = props.movie;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: imdb_image_url || "../../assets/images/image-not-found.png",
        }}
      ></ImageBackground>
    </View>
  );
};

export default MovieItem;
