import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../carItem";

const CarsList = () => {
  const renderItem = ({ item }) => <CarItem car={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
