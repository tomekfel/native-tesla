import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as Linking from "expo-linking";

import styles from "./styles";
import StyledButton from "../styledButton";

const MovieItem = (props) => {
  const {
    imdb_image_url,
    imdb_title,
    imdb_description,
    imdb_user_rating,
    imdb_link,
  } = props.movie;

  _handlePress = () => {
    Linking.openURL(imdb_link);
    this.props.onPress && this.props.onPress();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: imdb_image_url || "../../assets/images/image-not-found.png",
        }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{imdb_title}</Text>
          <View style={styles.rating}>
            <Text style={styles.textRating}>
              <Ionicons name="star" size={20} color="yellow" />
              {imdb_user_rating}/10
            </Text>
          </View>
          <Text style={styles.textDescription}>{imdb_description}</Text>
          <Text onPress={this._handlePress} style={styles.imdb}>
            More details <FontAwesome name="imdb" size={24} color="yellow" />
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MovieItem;
