import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../styledButton";

export default function CarItem(props) {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          <Text style={styles.cta}> {taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton type="primary" content="Custom order" />
        <StyledButton type="secondary" content="Existing inventory" />
      </View>
    </View>
  );
}
