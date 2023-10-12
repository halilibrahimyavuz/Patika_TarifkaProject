import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard'
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';


const Categories = ({navigation}) => {

  const baseURL = process.env.API_URL;
   const { data, loading, error } = useFetch(baseURL);

  
  // console.log( data.categories);


 
 if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <Error/>;
  }


const handleProductSelect = (meals) => {
    navigation.navigate("MealsPage", { meals });
  };


  return (
    <View style={styles.container}>
    <FlatList
      data={data.categories}
      keyExtractor={(item) => item.idCategory}
      renderItem={({ item }) => (
        <CategoriesCard item={item} onSelect={handleProductSelect} />
      )}
    />
  </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        backgroundColor:"orange"
    }
})