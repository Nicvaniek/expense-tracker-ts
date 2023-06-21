import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../models/root-stack-param-list";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import { IconButton } from "../components/IconButton";

// type Props = NativeStackScreenProps<RootStackParamList, "MealDetail">;

export const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const meal = MEALS.find(({ id }) => id === mealId) || MEALS[0];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton iconName="star-outline" onPress={() => {}} color="white" />
      ),
    });
  }, []);

  if (!meal) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text>{meal.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
