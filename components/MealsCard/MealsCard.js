import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions
} from "react-native";
import React from "react";

const MealsCard = ({ meal, onSelect }) => {
  return (
    <View style={styles.container}>
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
        <View style={styles.overlayContainer}>
          <Text style={styles.overlayText}>{meal.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </View>
  );
};

export default MealsCard;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: height * 0.28,
    resizeMode: 'cover',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  overlayText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});