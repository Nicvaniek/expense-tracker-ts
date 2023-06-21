import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Meal } from "../models/meal";

type Props = {
  meal: Meal;
  onSelectMeal: (id: string) => void;
};

export const MealTile = ({ meal, onSelectMeal }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={() => onSelectMeal(meal.id)}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={{ uri: meal.imageUrl }} />
          <Text style={styles.title}>{meal.title}</Text>
          <View style={styles.subTextContainer}>
            <Text>{meal.duration}m</Text>
            <Text>{meal.complexity.toUpperCase()}</Text>
            <Text>{meal.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  innerContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    // elevation
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  pressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  subTextContainer: {
    padding: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
