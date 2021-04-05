import React from "react";
import { View, FlatList, Dimensions, StatusBar } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../carItem";

const CarsList = () => {
  const screenHeight = Dimensions.get("screen").height;
  const statusBarHeight = StatusBar.currentHeight;
  const renderItem = ({ item }) => <CarItem car={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={screenHeight - statusBarHeight}
      />
    </View>
  );
};

export default CarsList;
