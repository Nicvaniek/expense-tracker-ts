import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Category } from "../models/category";

type Props = {
  category: Category;
  onSelect: (id: string) => void;
};

export const CategoryTile = ({ category, onSelect }: Props) => {
  const { width } = useWindowDimensions();

  const containerStyle = {
    width: width * 0.5,
    height: width * 0.5,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={() => onSelect(category.id)}
      >
        <View
          style={[styles.innerContainer, { backgroundColor: category.color }]}
        >
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  innerContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
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
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
