import React from "react";
import { View, Text, Dimensions, StatusBar, FlatList } from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import MovieItem from "../MovieItem";
import styles from "./styles";

const Movies = () => {
  const screenHeight = Dimensions.get("screen").height;
  const statusBarHeight = StatusBar.currentHeight;

  const [movies, setMovies] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [currentMovie, setCurrentMovie] = React.useState([]);

  const getPosts = async () => {
    const { data } = await axios.get(
      `https://beatporttopcharts.com/php/api/movie/search.php?s=&l=${currentPage}&c=14&rating_count=1,MAX`
    );
    setMovies(data.records);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  // React.useEffect(() => {
  //   console.log("currentMovie.length", currentMovie.length);
  //   currentMovie.length > 0 && console.log(currentMovie[0].item);
  // }, [currentMovie]);

  const renderItem = ({ item }) => {
    return <MovieItem movie={item} />;
  };

  const loadMore = async () => {
    if (currentPage < totalPages) {
      const url = `https://beatporttopcharts.com/php/api/movie/search.php?s=&l=${
        currentPage + 1
      }&c=14&rating_count=1,MAX`;
      // console.log(url);
      const { data } = await axios.get(url);
      setMovies([...movies, ...data.records]);
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
      // setCurrentMovie(data[0]);
    }
  };

  const onViewableItemsChanged = React.useCallback(
    ({ viewableItems, changed }) => {
      // console.log("Visible items are", viewableItems);
      // console.log("Changed in this iteration", changed);
      setCurrentMovie(viewableItems);
    },
    []
  );

  const renderTitle = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdb_link}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={screenHeight - statusBarHeight}
        onEndReached={loadMore}
        onEndReachedThreshold={1}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
      {currentMovie.length > 0 && (
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>
            {currentMovie[0].item.imdb_title}
          </Text>
          <View style={styles.rating}>
            <Text style={styles.textRating}>
              <Ionicons name="star" size={20} color="yellow" />
              {currentMovie[0].item.imdb_user_rating}/10
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Movies;
