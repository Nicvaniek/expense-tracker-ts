import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen } from "./screens/Categories.screen";
import { RootStackParamList } from "./models/root-stack-param-list";
import { MealsScreen } from "./screens/Meals.screen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { MealDetailScreen } from "./screens/MealDetail.screen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamLists } from "./models/drawer-param-lists";
import { FavouritesScreen } from "./screens/Favourites.screen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={headerScreenOptions}>
    <Drawer.Screen name=" All Categories" component={CategoriesScreen} />
    <Drawer.Screen name="Favourites" component={FavouritesScreen} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={headerScreenOptions}>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Meals" component={MealsScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
const headerScreenOptions = {
  headerStyle: { backgroundColor: "#351303" },
  headerTintColor: "white",
};
