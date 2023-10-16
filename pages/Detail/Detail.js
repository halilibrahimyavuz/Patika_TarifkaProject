import {
  Button,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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

  const linking=()=>{
    const youtube = mealData.strYoutube;
    Linking.openURL(youtube);  
  };


   
  return (
 
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: mealData.strMealThumb }} />
        <Text style={styles.title}> {mealData.strMeal} </Text>
        <Text style={styles.area}> {mealData.strArea} </Text>
        <Text style={styles.content}> {mealData.strInstructions} </Text>
      
       <TouchableOpacity
        onPress={linking}
        style={[styles.button, { backgroundColor: 'red' }]}
      >
        <Text style={[styles.buttonText, { fontSize: 20 }]}>Watch on Youtube</Text>
      </TouchableOpacity>
      </ScrollView>

  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    gap:10,
    flex: 1,
    padding: 5,
    margin: 5,
    flex: 1,
    backgroundColor: "#114d0b00",
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
  buttonContainer: {
    marginTop:10,
    paddingTop:10
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText: {
    fontSize: 16, // Varsayılan metin boyutu
    color: 'white',
    
  },
});
