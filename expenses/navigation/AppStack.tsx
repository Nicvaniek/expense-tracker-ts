import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "../models/stack-param-list";
import { Tabs } from "./Tabs";
import { ManageExpenseScreen } from "../screens/ManageExpense.screen";
import { Platform } from "react-native";
import { colors } from "../constants/colors";

const StackNav = createStackNavigator<StackParamList>();

export const AppStack = () => (
  <StackNav.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.SECONDARY },
      headerTintColor: "white",
    }}
  >
    <StackNav.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />
    <StackNav.Screen
      name="ManagementModal"
      component={ManageExpenseScreen}
      options={{
        presentation: "modal",
        headerLeft: () => Platform.select({ ios: null }),
      }}
    />
  </StackNav.Navigator>
);
