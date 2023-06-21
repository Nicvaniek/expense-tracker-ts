import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryTile } from "../components/CategoryTile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../models/root-stack-param-list";

export const CategoriesScreen = ({ navigation }) => {
  const handleCategorySelect = (id: string) => {
    navigation.navigate("Meals", { categoryId: id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <CategoryTile category={item} onSelect={handleCategorySelect} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#402f26",
  },
});
