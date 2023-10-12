import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Detail = ({ route }) => {
  const { strMeal } = route.params;
  // console.log(" strMeal -->", strMeal);
  const detailURL = process.env.API_DETAIL_URL;

  const { error, loading, data } = useFetch(`${detailURL}${strMeal}`);
  console.log("detailUL ----", `${detailURL}${strMeal}`);

  const mealData = data?.meals?.[0];
  console.log("mealData --> ", mealData);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Image style={styles.image} source={{ uri: mealData.strMealThumb }} />
        <Text style={styles.title}> {mealData.strMeal} </Text>
        <Text style={styles.area}> {mealData.strArea} </Text>
        <Button title="Watch on Youtube" color={"red"} style={styles.button} />
      </Card>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 5,
    backgroundColor: "#9c9a9a00",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    color: "#a52a2a",
    fontWeight: "bold",
    fontSize: 32,
  },
  area: {
    color: "#a52a2a",
    fontSize: 28,
    fontWeight: "500",
  },
  button: {
    borderRadius: 10,
  },
});
