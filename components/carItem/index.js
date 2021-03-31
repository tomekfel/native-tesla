import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../styledButton";

export default function CarItem({ source, title, subtitle }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={source} />
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <StyledButton type="primary" text="Custom order" />
      <StyledButton type="secondary" text="Existing inventory" />
    </View>
  );
}
