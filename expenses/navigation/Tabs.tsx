import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../models/tab-param-list";
import { colors } from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RecentExpensesScreen } from "../screens/RecentExpenses.screen";
import { AllExpensesScreen } from "../screens/AllExpenses.screen";
import { IconButton } from "../components/IconButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../models/stack-param-list";

const TabsNav = createBottomTabNavigator<TabParamList>();

type Props = NativeStackScreenProps<StackParamList, "Tabs">;

export const Tabs = ({ navigation }: Props) => (
  <TabsNav.Navigator
    initialRouteName="AllExpenses"
    screenOptions={({ route }) => ({
      headerStyle: { backgroundColor: colors.SECONDARY },
      headerTintColor: "white",
      tabBarStyle: { backgroundColor: colors.SECONDARY },
      tabBarActiveTintColor: colors.ACCENT,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "AllExpenses") {
          iconName = focused ? "list" : "list-outline";
        } else if (route.name === "RecentExpenses") {
          iconName = focused ? "hourglass" : "hourglass-outline";
        }
        return <Ionicons name={iconName as any} size={size} color={color} />;
      },
      headerRight: () => (
        <IconButton
          color="white"
          onPress={() => navigation.navigate("ManagementModal", {})}
          iconName="add-outline"
          style={{ marginRight: 14 }}
        />
      ),
    })}
  >
    <TabsNav.Screen
      name="RecentExpenses"
      component={RecentExpensesScreen}
      options={{ title: "Recent Expenses" }}
    />
    <TabsNav.Screen
      name="AllExpenses"
      component={AllExpensesScreen}
      options={{ title: "All Expenses" }}
    />
  </TabsNav.Navigator>
);
