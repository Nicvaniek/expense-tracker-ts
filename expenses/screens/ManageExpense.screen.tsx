import { StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../models/stack-param-list";
import { colors } from "../constants/colors";
import { Button } from "../components/Button";
import { useContext } from "react";
import { ExpensesContext } from "../context/expenses.context";
import { Expense } from "../models/expense";

type Props = NativeStackScreenProps<StackParamList, "ManagementModal">;

export const ManageExpenseScreen = ({ route, navigation }: Props) => {
  const { expense } = route.params;

  const { addExpense } = useContext(ExpensesContext);

  const handleSave = () => {
    const newExpense: Expense = {
      id: Math.random(),
      title: "Added expense A",
      amount: 25,
      date: new Date(),
    };

    addExpense(newExpense);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Demo Text</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.goBack()} style={styles.button}>
          Cancel
        </Button>
        <Button type="SECONDARY" style={styles.button} onPress={handleSave}>
          {expense ? "SAVE" : "ADD"}
        </Button>
      </View>
      {expense && <Button onPress={() => {}}>DELETE</Button>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    justifyContent: "space-between",
  },
  button: {
    width: "45%",
  },
});
