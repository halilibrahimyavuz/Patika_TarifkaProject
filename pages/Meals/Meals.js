import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import useFetch2 from "../../hooks/useFetch/useFetch2";
import MealsCard from "../../components/MealsCard/MealsCard"
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";



const Meals = ({ route, navigation }) => {
  const { meals } = route.params;
  const mealsURL = process.env.API_MEALS_URL;
  const {error,loading,data} = useFetch2(`${mealsURL}${meals.strCategory}`);

  const handleMealSelect = strMeal => {
    navigation.navigate('DetailPage', {strMeal});
};

const renderMeals = ({item}) => <MealsCard meal = {item} onSelect={()=>handleMealSelect(item.strMeal)}/>;


if (loading) {
  return <Loading />;
}

if (error) {
  return <Error />;
}
 
return (
  <View>
   
    <FlatList data={data.meals} renderItem={renderMeals} style={styles.container}/>
    
  </View>
  
);
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
  },
  image: {
    width: 100,
    height: 200,
    resizeMode: "contain",
  },
});
