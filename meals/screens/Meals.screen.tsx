import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../models/root-stack-param-list";
import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealTile } from "../components/MealTile";

// type Props = NativeStackScreenProps<RootStackParamList, "Meals">;

export const MealsScreen = ({ navigation, route }) => {
  const meals = MEALS.filter(({ categoryIds }) =>
    categoryIds.includes(route.params.categoryId)
  );

  useLayoutEffect(() => {
    const { categoryId } = route.params;
    const { title } =
      CATEGORIES.find(({ id }) => id === categoryId) || CATEGORIES[0];
    navigation.setOptions({ title });
  }, []);

  const handleMealSelect = (id: string) => {
    navigation.navigate("MealDetail", { mealId: id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <MealTile meal={item} onSelectMeal={handleMealSelect} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#402f26",
  },
});
