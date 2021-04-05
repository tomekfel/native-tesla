import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../carItem";

export default function CarsList() {
  // const renderItem = ({ item }) => <CarItem car={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
