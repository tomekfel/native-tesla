import React from "react";
import { View, Text, Dimensions, StatusBar, FlatList } from "react-native";
import axios from "axios";
import MovieItem from "../MovieItem";
import styles from "./styles";

const Movies = () => {
  const screenHeight = Dimensions.get("screen").height;
  const statusBarHeight = StatusBar.currentHeight;

  const [movies, setMovies] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

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

  const renderItem = ({ item }) => {
    return <MovieItem movie={item} />;
  };

  const loadMore = async () => {
    if (currentPage < totalPages) {
      const url = `https://beatporttopcharts.com/php/api/movie/search.php?s=&l=${
        currentPage + 1
      }&c=14&rating_count=1,MAX`;
      console.log(url);
      const { data } = await axios.get(url);
      setMovies([...movies, ...data.records]);
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdb_link}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={screenHeight - statusBarHeight}
        onEndReached={loadMore}
        onEndReachedThreshold={1}
      />
    </View>
  );
};

export default Movies;
