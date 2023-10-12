import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./pages/Categories/Categories";
import Meals from "./pages/Meals/Meals";
import Detail from "./pages/Detail/Detail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          backgroundColor: "blue",
          headerTintColor: "orange",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold", fontSize: 28 },
        }}
      >
        <Stack.Screen name="CategoriesPage" component={Categories} />
        <Stack.Screen name="MealsPage" component={Meals} />
        <Stack.Screen name="DetailPage" component={Detail}  />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
