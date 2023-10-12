import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

const CategoriesCard = ({item , onSelect} ) => {
   
    
    
    return (

       
    <TouchableWithoutFeedback
      onPress={()=>onSelect(item)}>
    
      <View style={styles.container}>
        <Image 
            style={styles.image}
            source={{uri:item.strCategoryThumb}} />
        <Text style={styles.categories}> {item.strCategory}  </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#f1e6c7",
    margin:5,
    padding:5,
    flexDirection:"row",
    alignItems:"center",
    borderRadius:5,
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
    shadowColor:"black",
   elevation:5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5, 
    shadowRadius: 5, 


  },
  image: {
    padding:3,
    width:100 ,
    height:100,
    resizeMode:"contain",
    justifyContent:"center",
    alignContent:"center"
  },
  categories:{
    fontSize:28,
    paddingLeft:15,
    fontWeight:"400"
  }
});
